import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
  transition: background-color 0.1s ease-in;

  &:hover {
    ${({ theme }) => css`
      background-color: ${theme.colors.chatHover};
    `}
  }
`

export const MessageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`

export const FlexColumn = styled.div<{ end?: true }>`
  ${({ end }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: ${end ? 'end' : 'start'};
  `}
`

export const Message = styled.p`
  ${({ theme }) => css`
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 18vw;
    font-size: ${theme.sizes.small};
    color: ${theme.colors.secondaryText};
  `}
`
export const SentDate = styled.p`
  ${({ theme }) => css`
    font-size: 1.1rem;
    color: ${theme.colors.secondaryText};
  `}
`

export const UnreadMessage = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.sizes.xsmall};
    color: white;
    background-color: #00c73e;
    border-radius: 30px;
    padding: 2px 8px;
  `}
`
