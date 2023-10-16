import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
`

export const ModalMain = styled.div<{ darkBackground: boolean }>`
  ${({ theme, darkBackground }) => css`
    height: 100%;
    width: 100%;
    background-color: ${darkBackground ? '#3b3b3b9e' : 'none'};
  `}
`
