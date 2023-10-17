import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    border-radius: 15px;
    background-color: white;
    height: fit-content;
    top: 50%;
    left: 50%;
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
  `}
`

export const InfomationForm = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    display: grid;
    padding: 1rem;
    place-items: center;
  `}
`

export const CreateButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
  `}
`
