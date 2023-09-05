import styled, { css } from 'styled-components'

export const Wrapper = styled.form`
  padding: 9px 12px;
  background-color: #f0f2f5;
  border-radius: 8px;
  position: relative;
`

export const EditableDiv = styled.div`
  max-height: 7.35em;
  min-height: 1.47em;
  overflow-y: auto;

  &:focus-visible {
    outline: none;
  }
`

export const PlaceHolder = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 8px;
    left: 15px;
    pointer-events: none;
    color: ${theme.colors.greyText};
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
