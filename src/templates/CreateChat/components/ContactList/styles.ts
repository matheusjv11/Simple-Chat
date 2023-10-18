import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `}
`

export const UserOption = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid ${theme.colors.border};

    &:hover {
      background-color: ${theme.boxColors.secondaryBackground};
    }
  `}
`

export const NameWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
  `}
`

export const House = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.xsmall};
    text-transform: capitalize;
    color: ${theme.colors.heading};
  `}
`

export const CheckCircle = styled.div<{ checked: boolean }>`
  ${({ theme, checked }) => css`
    height: 20px;
    width: 20px;
    border: 2px solid ${theme.colors.border};
    border-radius: 50%;
    position: relative;
    color: white;

    ${checked &&
    css`
      background-color: ${theme.colors.primary};
    `}

    span {
      font-size: 80%;
    }
  `}
`
