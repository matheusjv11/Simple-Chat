import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    border-radius: 15px;
    background-color: white;
    height: 200px;
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
