const baseColors = {
  black: '#000',
  red: '#ff647c',
  green: '#0bf9b3',
  blue: '#487fd9',
  yellow: '#ebc455',
  gray: '#a0a2ae',
}

const brandColors = {
  raisinBlack: '#16171c',
  caribbeanGreen: baseColors.green,
}

export const colors = {
  ...baseColors,
  ...brandColors,
}

const fontSizes = [10, 12, 14, 16, 18, 20, 21, 24, 27, 30, 36, 42, 48]
const spaces = [2, 4, 8, 12, 16, 20, 24, 28, 32, 64, 128]

export const definitions = {
  colors,
  fontSizes,
  spaces,
}
