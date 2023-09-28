const baseColors = {
  black: '#000',
  red: '#ff647c',
  green: '#0bf9b3',
  blue: '#487fd9',
  yellow: '#ebc455',
}

const brandColors = {
  raisinBlack: '#16171c',
  caribbeanGreen: baseColors.green,
}

export const colors = {
  ...baseColors,
  ...brandColors,
}

const fontSizes = [10, 12, 14, 16, 18, 20]
const spaces = [0, 4, 8, 16, 20, 24, 28, 32]

export const definitions = {
  colors,
  fontSizes,
  spaces,
}
