import styled, { css } from 'styled-components'
import { MessageBoxProps } from '.'

type WrapperProps = Pick<MessageBoxProps, 'currentUser'>

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, currentUser }) => css`
    min-height: 10px;
    min-width: 10px;
    background-color: blue;
  `}
`
