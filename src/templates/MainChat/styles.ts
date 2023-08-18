import styled from 'styled-components'

import * as ChatBodyStyles from '@/components/ChatBody/styles'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;

  ${ChatBodyStyles.Wrapper} {
    flex: 1;
  }
`
