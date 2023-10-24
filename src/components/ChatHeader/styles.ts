import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    background-color: ${theme.boxColors.primaryBackground};
    position: absolute;
    z-index: 2;
    color: ${theme.colors.heading};
    border: none;
    cursor: pointer;
    transition: background-color 0.1s ease-in-out;

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
`
