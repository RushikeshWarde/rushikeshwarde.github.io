import React, { useState, useEffect, useMemo } from 'react';

import styles from 'assets/css/Grid.module.css';
import { glowTypes, injectFlickerKeyframes } from 'components/GlowUtils';

const CELL       = 60;    // must match --cell-size
const STEP_DELAY = 250;   // ms per drop step
const MAX_CLUSTER = 20;    // upper bound always

export default function DroppingGrid() {
  // 1) Grid dimensions
  const cols     = useMemo(() => Math.ceil(window.innerWidth  / CELL), []);
  const rows     = useMemo(() => Math.ceil(window.innerHeight / CELL), []);
  const gridSize = useMemo(() => cols * rows, [cols, rows]);

  // 2) Initial glowMap and snapshot
  const [glowMap, setGlowMap] = useState(() => {
    const map = Array(gridSize).fill(null);
    for (let i = 0; i < gridSize; i++) {
      if (Math.random() > 0.8) {
        const { color, keyframe } =
          glowTypes[Math.floor(Math.random()*glowTypes.length)];
        map[i] = { color, keyframe };
      }
    }
    return map;
  });

  // 3) Inject keyframes once
  useEffect(() => injectFlickerKeyframes(), []);

  // 4) Helper to find the next cluster with a given min size
  function findNextCluster(localMap, minCluster) {
    const visited = new Uint8Array(gridSize);
    const dirs = [
      [1,0],[-1,0],[0,1],[0,-1],
      [1,1],[1,-1],[-1,1],[-1,-1]
    ];

    for (let i = 0; i < gridSize; i++) {
      if (visited[i] || !localMap[i]) continue;
      const color = localMap[i].color;
      const stack = [i];
      const cluster = [];
      visited[i] = 1;

      while (stack.length) {
        const idx = stack.pop();
        cluster.push(idx);
        const x = idx % cols, y = (idx/cols)|0;
        for (const [dx,dy] of dirs) {
          const nx = x+dx, ny = y+dy;
          if (nx<0||nx>=cols||ny<0||ny>=rows) continue;
          const nidx = ny*cols + nx;
          if (!visited[nidx] && localMap[nidx] && localMap[nidx].color===color) {
            visited[nidx] = 1;
            stack.push(nidx);
          }
        }
      }

      if (cluster.length >= minCluster && cluster.length <= MAX_CLUSTER) {
        return {
          cells:    cluster,
          color:    color,
          keyframe: localMap[i].keyframe
        };
      }
    }
    return null;
  }

  // 5) Async sleep
  const wait = ms => new Promise(r => setTimeout(r, ms));

  // 6) Main drop logic on mount
  useEffect(() => {
    let localMap = glowMap.slice();

    (async () => {
      // A) Two phases: first 2, then 1
      for (const minCluster of [2, 1]) {
        while (true) {
          const cluster = findNextCluster(localMap, minCluster);
          if (!cluster) break;

          let cells = cluster.cells.slice();
          const { color, keyframe } = cluster;
          const dirs = [
            [1,0],[-1,0],[0,1],[0,-1],
            [1,1],[1,-1],[-1,1],[-1,-1]
          ];

          while (true) {
            // B) carve gap early
            const targets = cells.map(i => i + (cols -1));
            const backup  = {};
            for (const t of targets) {
              if (t < gridSize && localMap[t] && !cells.includes(t)) {
                backup[t] = localMap[t];
                localMap[t] = null;
              }
            }
            setGlowMap(localMap.slice());
            await wait(STEP_DELAY);

            // C) Clear old cluster cells
            cells.forEach(i => localMap[i] = null);
            let newCells = cells.map(i => i + (cols - 1));
            newCells.forEach(i => {
              if (i < gridSize) {
                localMap[i] = { color, keyframe };
              }
            });

            // D) Pick up same color neighbors mid‑drop
            const expanded = new Set(newCells);
            for (const idx of newCells) {
              const x = idx % cols, y = (idx/cols)|0;
              for (const [dx,dy] of dirs) {
                const nx = x+dx, ny = y+dy;
                if (nx<0||nx>=cols||ny<0||ny>=rows) continue;
                const nidx = ny*cols+nx;
                if (
                  nidx < gridSize &&
                  !expanded.has(nidx) &&
                  localMap[nidx] &&
                  localMap[nidx].color === color
                ) {
                  expanded.add(nidx);
                }
              }
            }
            newCells = Array.from(expanded);

            setGlowMap(localMap.slice());

            // E) Restore backups
            await wait(STEP_DELAY);
            for (const [idx,val] of Object.entries(backup)) {
              const n = Number(idx);
              if (!localMap[n]) localMap[n] = val;
            }
            setGlowMap(localMap.slice());

            cells = newCells;
            // F) break when fully off‑screen
            if (cells.every(i => i >= gridSize)) break;
          }
        }
      }
      // both phases done: localMap & glowMap are now empty
    })();
    // run once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 7) render
  return (
    <div className={styles.bgPattern}>
      {glowMap.map((cell, idx) => (
        <div
          key={idx}
          className={`${styles.cell} ${
            cell ? styles[`glow-${cell.color === '#5ddfff' ? 'cyan' : 'purple'}`] : ''
          }`}
          style={cell ? {
            borderColor:           cell.color,
            boxShadow:             `0 0 6px ${cell.color},0 0 20px ${cell.color}`,
            animationName:         cell.keyframe,
            animationDuration:     '6s',
            animationIterationCount: 'infinite',
            animationDirection:      'alternate',
            animationTimingFunction: 'linear',
          } : {}}
        />
      ))}
    </div>
  );
}
