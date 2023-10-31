import styled, { css } from 'styled-components'
import { Wrapper as IconButton } from '@/components/IconButton/styles'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: ${theme.boxColors.primaryBackground};
    color: ${theme.colors.heading};
    border: none;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;
    width: calc(100% + 2rem);
    z-index: 1;

    &:hover {
      background-color: ${theme.boxColors.secondaryBackground};
    }
  `}
`

export const InformationWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  text-align: left;

  ${IconButton} {
    display: none;
    width: 2rem;

    @media (max-width: 750px) {
      display: block;
    }
  }
`
