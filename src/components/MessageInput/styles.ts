import styled from 'styled-components'

export const Wrapper = styled.main`
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
  position: absolute;
  top: 8px;
  left: 15px;
  pointer-events: none;
`
