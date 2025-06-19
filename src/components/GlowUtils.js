export const glowTypes = [
  { name: 'purple', color: '#8f7bff', keyframe: 'flickerCellPurple' },
  { name: 'cyan',   color: '#00ffff', keyframe: 'flickerCellCyan' },
];

export function injectFlickerKeyframes() {
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    @keyframes flickerCellPurple {
      0%   { opacity: 0.30; }
      10%  { opacity: 0.60; }
      25%  { opacity: 0.40; }
      40%  { opacity: 0.75; }
      55%  { opacity: 0.50; }
      70%  { opacity: 0.80; }
      85%  { opacity: 0.45; }
      100% { opacity: 0.65; }
    }

    @keyframes flickerCellCyan {
      0%   { opacity: 0.50; }
      10%  { opacity: 0.90; }
      25%  { opacity: 0.55; }
      40%  { opacity: 1.00; }
      55%  { opacity: 0.60; }
      70%  { opacity: 1.00; }
      85%  { opacity: 0.65; }
      100% { opacity: 0.95; }
    }
  `;
  document.head.appendChild(styleEl);
  return () => document.head.removeChild(styleEl);
}
