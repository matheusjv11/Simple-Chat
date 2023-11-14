import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css``}
`

export const UserWrapper = styled.main`
  ${({ theme }) => css`
    flex: 1;
    pointer-events: auto;
  `}
`

export const UserRow = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.8rem;
    width: 100%;
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
export const MembersTitle = styled.h4`
  ${({ theme }) => css`
    padding: 0.5rem 1rem;
    font-size: ${theme.sizes.small};
    color: ${theme.colors.heading};
  `}
`
