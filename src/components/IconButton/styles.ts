import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  width: 25px;
  border: none;
  cursor: pointer;
  background: none;

  ${({ theme }) => css`
    svg {
      color: ${theme.colors.primary};
    }
  `}
`
