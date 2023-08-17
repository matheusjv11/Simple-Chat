import styled from 'styled-components'

import * as SideMessagesStyles from '@/templates/SideMessages/styles'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 100%;
  height: 100vh;

  ${SideMessagesStyles.Wrapper} {
    width: 25vw;
  }
`
