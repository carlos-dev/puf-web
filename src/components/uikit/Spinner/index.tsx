import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`

export const Spinner = styled('div')`
  display: grid;
  place-items: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(82, 0, 255, 0) 0deg,
    #5200ff 360deg
  );
  animation: ${spin} 2s infinite linear;
  &::before {
    content: '';
    border-radius: 50%;
    width: 80%;
    height: 80%;
    background-color: #fff;
  }
`
