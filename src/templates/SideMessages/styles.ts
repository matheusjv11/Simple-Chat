import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  min-width: 50rem;
  display: flex;
  flex-direction: column;
`

export const SearchBox = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.border};
    padding: 0rem 2rem 2rem 2rem;
    > div {
      display: inline-flex;
      justify-content: space-between;
      width: 100%;
      align-items: center;
    }
  `}
`

export const ChatWrapper = styled.div`
  padding: 0.4rem;
  flex: 1;

  > main {
    padding: 1rem;

    &:not(:last-of-type) {
      ${({ theme }) => css`
        border-bottom: 1px solid ${theme.colors.border};
      `}
    }
  }

  > a {
    text-decoration: none;
    color: unset;
  }
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
