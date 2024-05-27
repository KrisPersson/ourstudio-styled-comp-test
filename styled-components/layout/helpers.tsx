import { theme } from "./theme";

export const size = (multiplier = 1) => {
  const baseUnit = parseFloat("8");
  return `${multiplier * baseUnit}px`;
};
