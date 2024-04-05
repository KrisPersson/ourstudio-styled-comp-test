import { theme } from './theme';

export const size = (multiplier = 1) => {
  const baseUnit = parseFloat(theme.size.baseUnit);
  return `${multiplier * baseUnit}px`;
};

const _hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const rgba = (hex: string, alpha: number) => {
  const color = _hexToRgb(hex);

  if (color) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
  }

  return hex;
};
