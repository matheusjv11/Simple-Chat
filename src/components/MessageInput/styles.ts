import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  ${({ theme }) => css`
    padding: 9px 12px;
    background-color: #f0f2f5;
    border-radius: 8px;
    position: relative;
    max-width: 75vw;
    overflow-x: hidden;
    margin-bottom: 1rem;
    background-color: ${theme.boxColors.primaryBackground};
  `}
`

export const EditableDiv = styled.div`
  max-height: 7.35em;
  min-height: 1.47em;
  line-height: 20px;
  overflow-y: auto;
  width: 95%;

  &:focus-visible {
    outline: none;
  }

  ${({ theme }) => css`
    max-height: 7.35em;
    min-height: 1.47em;
    overflow-y: auto;
    width: 95%;
    color: ${theme.colors.heading};
    font-weight: 500;

    &:focus-visible {
      outline: none;
    }
  `}
`

export const PlaceHolder = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 15px;
    pointer-events: none;
    color: ${theme.colors.greyText};
    font-weight: 500;
    transform: translateY(-50%);
  `}
`

export const SendWrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    border-left: 1px solid ${theme.colors.lightGrey};
    padding-left: 1.5rem;
  `}
`
