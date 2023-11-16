import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 100%;
    height: 100%;
    background-color: ${theme.boxColors.primaryBackground};
    overflow: hidden;
    position: relative;
  `}
`
