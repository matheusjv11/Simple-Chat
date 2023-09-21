import styled, { css } from 'styled-components'

import * as SideMessagesStyles from '@/templates/SideMessages/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: 100%;
    height: 100vh;
    background-color: ${theme.boxColors.primaryBackground};
  `}

  ${SideMessagesStyles.Wrapper} {
    width: 25vw;
  }
`
