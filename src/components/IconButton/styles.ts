import styled, { css } from 'styled-components'
import { IconButtonProps } from '.'

export const Wrapper = styled.button<Pick<IconButtonProps, 'color'>>`
  width: 25px;
  border: none;
  cursor: pointer;
  background: none;

  ${({ theme, color }) => css`
    svg {
      color: ${color === 'primary'
        ? theme.colors.primary
        : theme.colors.greyText};
    }
  `}
`
