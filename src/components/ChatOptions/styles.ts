import styled, { css } from 'styled-components'
import { ChatOptionsProps } from '.'

type WrapperProps = Pick<ChatOptionsProps, 'position'>

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, position }) => css`
    backdrop-filter: blur(30px);
    font-size: 13px;
    width: 140px;
    border-radius: 15px;
    background-color: ${theme.boxColors.optionsBackground};
    color: ${theme.colors.secondaryText};
    box-shadow: 0 0.25rem 0.5rem 0.125rem ${theme.boxColors.optionsShadow};
    position: absolute;
    top: ${`${position.top}px`};
    left: ${`${position.left}px`};

    :first-child {
      border-radius: 10px 10px 0 0;
    }

    :last-child {
      border-radius: 0 0 10px 10px;
    }
  `}
`

export const Option = styled.button`
  ${({ theme }) => css`
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
    align-items: center;
    cursor: pointer;
    border: none;
    width: 100%;
    background: unset;
    color: ${theme.colors.heading};

    &.danger {
      color: #d81818;
    }

    &:hover {
      background-color: ${theme.colors.border};
    }

    > svg {
      height: 18px;
    }

    > p {
      font-weight: 500;
    }
  `}
`
