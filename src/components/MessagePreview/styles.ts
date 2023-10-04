import styled, { css } from 'styled-components'
import { Username } from '../MessageBox/styles'

type WrapperProps = {
  selectedchat: number
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, selectedchat }) => css`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.7rem 1.2rem;
    border-radius: 10px;
    background-color: ${selectedchat
      ? theme.boxColors.selectedChat
      : theme.boxColors.primaryBackground};

    &:hover {
      background-color: ${selectedchat
        ? theme.boxColors.selectedChat
        : theme.boxColors.secondaryBackground};
    }

    ${selectedchat &&
    css`
      ${SentDate}, ${Message}, ${Username}, ${Pinned} {
        color: white;
      }

      ${Button} {
        border: 1px solid white;
        color: white;
      }
    `}
  `}
`

export const MessageContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`

export const FlexColumn = styled.div<{ end?: boolean }>`
  ${({ end }) => css`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    align-items: ${end ? 'end' : 'start'};

    &.preview-buttons {
    }
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
    font-weight: 600;
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

export const Button = styled.button`
  ${({ theme }) => css`
    background: none;
    cursor: pointer;
    border: 1px solid ${theme.colors.secondaryText};
    color: ${theme.colors.secondaryText};
    border-radius: 100%;
    width: 16px;
    height: 16px;
    margin-top: -2px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.6;
    }

    > svg {
      height: 10px;
    }
  `}
`

export const RightSide = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.8rem;
  `}
`

export const Pinned = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.secondaryText};
    width: 13px;
    height: 13px;
  `}
`
