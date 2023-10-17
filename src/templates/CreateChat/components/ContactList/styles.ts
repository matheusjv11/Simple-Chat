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
    gap: 0.3rem;
    padding: 0.5rem;
    cursor: pointer;
    border: none;
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
    font-size: ${theme.sizes.small};
    text-transform: capitalize;
  `}
`

export const CheckCircle = styled.div<{ checked: boolean }>`
  ${({ theme, checked }) => css`
    height: 20px;
    width: 20px;
    background-color: red;
    border-radius: 50%;
    position: relative;

    &::after {
      content: '';
      display: ${checked ? 'block' : 'none'};
      position: absolute;
      height: 60%;
      width: 60%;
      border-radius: 50%;
      background-color: blue;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      z-index: 1;
    }
  `}
`
