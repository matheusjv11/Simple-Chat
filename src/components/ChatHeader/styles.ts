import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0.35rem 1rem;
    background-color: ${theme.boxColors.primaryBackground};
    position: absolute;
    z-index: 2;
    color: ${theme.colors.heading};
  `}
`

export const InformationWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`
