import { DefaultTheme } from 'styled-components'

const addifExists = (prop: string | boolean, value: string) =>
  prop ? value : ''

const theme =
  (prop: string) => (value: number | string) => (props: DefaultTheme) =>
    props.theme[prop][value] || value

export const th = {
  space: theme('spaces'),
  size: theme('fontSizes'),
  color: theme('colors'),
}

// export const background = (props: DefaultTheme) =>
//   props.bg && `background-color: ${props.theme.colors[props.bg]};`

export const background = (props: DefaultTheme) =>
  addifExists(props.bg, `background-color: ${props.theme.colors[props.bg]} ;`)

export const font = (props: DefaultTheme) => {
  const color = addifExists(
    props.color,
    `color: ${props.theme.colors[props.color] || props.color};`
  )

  const size = addifExists(
    Object.prototype.hasOwnProperty.call(props, 'fontSize'),
    `font-size: ${props.theme.fontSizes[props.fontSize]}px;`
  )
  const textAlign = addifExists(
    props.textAlign,
    `text-align: ${props.textAlign};`
  )
  const fontWeight = addifExists(
    props.fontWeight,
    `font-weight: ${props.fontWeight};`
  )

  return `
    ${color}
    ${size}
    ${textAlign}
    ${fontWeight}
  `
}

export const flexbox = (props: DefaultTheme) => {
  return `
    ${addifExists(props.flex, `flex: ${props.flex};`)}
    ${addifExists(props.flexbox, 'display: flex;')}
    ${addifExists(
      props.flexDirection,
      `flex-direction: ${props.flexDirection};`
    )}
    ${addifExists(props.alignItems, `align-items: ${props.alignItems};`)}
    ${addifExists(
      props.justifyContent,
      `justify-content: ${props.justifyContent};`
    )}
  `
}

export const margin = (props: DefaultTheme) => {
  const mb = props.mb ?? props.my ?? props.m ?? ''
  const mt = props.mt ?? props.my ?? props.m ?? ''
  const ml = props.ml ?? props.mx ?? props.m ?? ''
  const mr = props.mr ?? props.mx ?? props.m ?? ''

  return `
    ${mb !== '' ? `margin-bottom: ${props.theme.spaces[mb] || mb}px;` : ''}
    ${mt !== '' ? `margin-top: ${props.theme.spaces[mt] || mt}px;` : ''}
    ${ml !== '' ? `margin-left: ${props.theme.spaces[ml] || ml}px;` : ''}
    ${mr !== '' ? `margin-right: ${props.theme.spaces[mr] || mr}px;` : ''}
  `
}

export const padding = (props: DefaultTheme) => {
  const pb = props.pb ?? props.py ?? props.p ?? ''
  const pt = props.pt ?? props.py ?? props.p ?? ''
  const pl = props.pl ?? props.px ?? props.p ?? ''
  const pr = props.pr ?? props.px ?? props.p ?? ''

  return `
    ${pb !== '' ? `padding-bottom: ${props.theme.spaces[pb] || pb}px;` : ''}
    ${pt !== '' ? `padding-top: ${props.theme.spaces[pt] || pt}px;` : ''}
    ${pl !== '' ? `padding-left: ${props.theme.spaces[pl] || pl}px;` : ''}
    ${pr !== '' ? `padding-right: ${props.theme.spaces[pr] || pr}px;` : ''}
  `
}
