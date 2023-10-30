import styled, { css } from 'styled-components'

import * as ChatBodyStyles from '@/components/ChatBody/styles'
import * as MessageInputStyles from '@/components/MessageInput/styles'

export const Wrapper = styled.main<{ isOpen: boolean }>`
  display: flex;
  position: relative;

  @media (max-width: 750px) {
    ${({ theme, isOpen }) => css`
      position: absolute;
      width: 100vw;
      height: 100%;
      transform: translate3d(100vw, 0, 0);
      transition: transform 300ms cubic-bezier(0.33, 1, 0.68, 1);
      z-index: 1;

      ${isOpen &&
      css`
        transform: translate3d(0, 0, 0);
      `}
    `}
  }
`

export const ChatWrapper = styled.main<{ isDescriptionOpen: boolean }>`
  ${({ theme, isDescriptionOpen }) => css`
    display: flex;
    padding: 0 1rem;
    flex-direction: column;
    background: ${theme.boxColors.chatBackground};
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    transition: width 300ms cubic-bezier(0.33, 1, 0.68, 1);

    ${isDescriptionOpen &&
    css`
      width: calc(100% - 25vw);
    `}

    &::before {
      content: '';
      background-image: url('/img/chat-background.png');
      background-size: 190px 190px;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      opacity: 0.15;
    }

    > * {
      width: 100%;
    }

    ${ChatBodyStyles.Wrapper} {
      flex: 1;
    }

    ${ChatBodyStyles.MessageList}, ${MessageInputStyles.Wrapper} {
      max-width: 950px;
    }

    @media (max-width: 1200px) {
      width: 100%;
    }
  `}
`
