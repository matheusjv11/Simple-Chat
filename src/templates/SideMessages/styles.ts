import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    min-width: 35rem;
    width: 30vw;
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${theme.colors.border};

    @media (max-width: 750px) {
      width: 100vw;
    }
  `}
`

export const SearchBox = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.border};
    padding: 0rem 2rem 2rem 2rem;
    color: ${theme.colors.heading};

    > div {
      display: inline-flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
  `}
`

export const Author = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.border};
    padding: 1rem;
    display: grid;
    justify-content: center;

    p,
    a {
      color: ${theme.colors.secondaryText};
      font-size: ${theme.sizes.small};
    }
  `}
`
