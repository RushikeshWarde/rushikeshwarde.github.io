import React, { useMemo, useEffect } from 'react';

import { glowTypes, injectFlickerKeyframes } from 'components/GlowUtils';
import styles from 'assets/css/Grid.module.css';

export default function BackgroundPattern() {
  useEffect(() => {
    const cleanup = injectFlickerKeyframes();
    return cleanup;
  }, []);

  const CELL = 60;
  const cols = Math.ceil(window.innerWidth  / CELL);
  const rows = Math.ceil(window.innerHeight / CELL);

  const cells = useMemo(() => {
    const arr = [];
    for (let i = 0; i < rows * cols; i++) {
      const isGlow = Math.random() > 0.8;
      const choice = isGlow
        ? glowTypes[Math.floor(Math.random() * glowTypes.length)]
        : null;
      arr.push({
        glow: isGlow,
        choice,
        duration: isGlow ? (Math.random() * 3 + 4).toFixed(2) + 's' : '0s',
        delay:    isGlow ? (Math.random() * 6).toFixed(2) + 's' : '0s',
      });
    }
    return arr;
  }, [rows, cols]);

  return (
    <div className={styles.bgPattern}>
      {cells.map(({ glow, choice, duration, delay }, idx) => (
        <div
          key={idx}
          className={`${styles.cell} ${glow ? styles[`glow-${choice.name}`] : ''}`}
          style={glow ? {
            borderColor:  choice.color,
            boxShadow:    `0 0 6px ${choice.color}, 0 0 20px ${choice.color}`,
            animationName: choice.keyframe,
            animationDuration: duration,
            animationDelay: delay,
            animationIterationCount: 'infinite',
            animationDirection: 'alternate',
            animationTimingFunction: 'linear',
          } : {}}
        />
      ))}
    </div>
  );
}
