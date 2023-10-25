import styled, { css } from 'styled-components'
import { TextButtonProps } from '.'

type WrapperProps = Pick<TextButtonProps, 'color' | 'disabled'>

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, disabled, color }) => css`
    cursor: pointer;
    padding: 1rem 4rem;
    background-color: ${color === 'primary'
      ? theme.colors.primary
      : theme.colors.danger};
    color: white;
    font-family: ${theme.font.family};
    font-weight: 300;
    border: none;
    border-radius: 10px;
    transition: all 0.15s ease;

    ${disabled &&
    css`
      pointer-events: none;
      cursor: not-allowed;
      opacity: 0.5;
    `}

    &:hover {
      scale: 1.05;
    }
  `}
`
