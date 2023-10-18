import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    border-radius: 15px;
    background-color: white;
    height: fit-content;
    top: 50%;
    left: 50%;
    width: 35vw;
    background-color: ${theme.boxColors.primaryBackground};
    color: ${theme.colors.heading};
    transform: translateY(-50%) translateX(-50%);
    position: absolute;
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${theme.colors.border};
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: grid;
    padding: 1rem;
    place-items: center;
    border-top: 1px solid ${theme.colors.border};
  `}
`

export const CreateButton = styled.button<{ disabled: boolean }>`
  ${({ theme, disabled }) => css`
    cursor: pointer;
    padding: 1rem 4rem;
    background-color: ${theme.colors.primary};
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
