import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    backdrop-filter: blur(10px);
    font-size: 13px;
    width: 140px;
    border-radius: 15px;
    background-color: ${theme.boxColors.optionsBackground};
    color: ${theme.colors.heading};
    box-shadow: 0 0.25rem 0.5rem 0.125rem ${theme.boxColors.optionsShadow};

    :first-child {
      border-radius: 10px 10px 0 0;
    }

    :last-child {
      border-radius: 0 0 10px 10px;
    }
  `}
`

export const Option = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.5rem;
    padding: 1rem;
    align-items: center;
    cursor: pointer;

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
