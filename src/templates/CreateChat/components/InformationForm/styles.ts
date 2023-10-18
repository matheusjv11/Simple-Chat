import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1.5rem;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.8rem;
  `}
`

export const InputLabel = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: 0.5rem;
    width: 100%;
    font-weight: 400;

    input {
      border-radius: 4px;
      border: none;
      padding: 0.3rem;
      background-color: ${theme.boxColors.secondaryBackground};
      color: ${theme.colors.heading};
    }
  `}
`

export const GroupInformation = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.5rem;
    width: 100%;
  `}
`
