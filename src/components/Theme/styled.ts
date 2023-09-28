import { DefaultTheme } from 'styled-components'

export const background = (props: DefaultTheme) =>
  props.bg && `background-color: ${props.theme.colors[props.bg]};`

export const color = (props: DefaultTheme) =>
  props.color && `color: ${props.theme.colors[props.color] || props.color};`

export const fontSize = (props: DefaultTheme) =>
  props.fontSize && `font-size: ${props.theme.fontSizes[props.fontSize]};`
