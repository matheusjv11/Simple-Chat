import styled from 'styled-components'

export const Wrapper = styled.main`
  overflow: auto;
  overflow-x: hidden;
`
export const MessageList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 1rem;
  gap: 1rem;
  justify-content: flex-end;
  margin: auto;
  height: 100%;
`
