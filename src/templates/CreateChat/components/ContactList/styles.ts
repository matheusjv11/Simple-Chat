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
    gap: 0.5rem;
  `}
`

export const NameWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `}
`

export const House = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.small};
    text-transform: capitalize;
  `}
`
