import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const SearchBox = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid ${theme.colors.border};
    padding: 2rem;
  `}
`

export const ChatWrapper = styled.div`
  padding: 0.4rem;

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
