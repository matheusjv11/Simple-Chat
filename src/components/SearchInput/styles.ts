import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  padding: 9px 18px 9px 40px;
  background-color: #f0f2f5;
  border-radius: 8px;
  position: relative;
`

export const EditableDiv = styled.div`
  max-height: 1.47em;
  min-height: 1.47em;
  overflow-y: none;

  &:focus-visible {
    outline: none;
  }
`

export const PlaceHolder = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 8px;
    left: 40px;
    pointer-events: none;
    color: ${theme.colors.greyText};
  `}
`

export const SendWrapper = styled.div`
  ${({ theme }) => css`
    pointer-events: none;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    padding-right: 0.5rem;
  `}
`
