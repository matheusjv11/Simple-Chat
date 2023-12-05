import styled, { css } from 'styled-components'
import { MessageBoxProps } from '.'

type MainProps = {
  isCurrentUser: boolean
}

export const Wrapper = styled.main<MainProps>`
  ${({ theme, isCurrentUser }) => css`
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    font-size: 13px;

    ${!!isCurrentUser &&
    css`
      justify-content: flex-end;
    `}
  `}
`
export const MessageCard = styled.div<MainProps>`
  ${({ theme, isCurrentUser }) => css`
    position: relative;
    border-radius: 8px;
    background-color: ${isCurrentUser
      ? theme.boxColors.currentMessageBackground
      : theme.boxColors.primaryBackground};
    padding: 0.8rem;
    width: fit-content;
    padding-right: 3.5rem;
    padding-top: 0.6rem;
    max-width: 70%;

    &::after {
      content: '';
      border: 13px solid transparent;
      border-bottom: 15px solid
        ${isCurrentUser
          ? theme.boxColors.currentMessageBackground
          : theme.boxColors.primaryBackground};
      clear: both;
      position: absolute;
      bottom: 0px;
      left: -11px;
      border-radius: 8px;
      display: block;
      transition: all 0.02s ease-in-out;
      ${!!isCurrentUser &&
      css`
        left: unset;
        right: -11px;
      `};
    }
  `}
`

export const Username = styled.p<{ nameColor?: string }>`
  ${({ theme, nameColor }) => css`
    font-weight: 600;
    font-size: ${theme.sizes.small};
    color: ${!!nameColor ? nameColor : theme.colors.heading};
    margin-bottom: 0.2rem;
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.heading};

    p {
      font-weight: 400;
      line-height: 1.8rem;
    }
  `}
`

export const SentHour = styled.div`
  ${({ theme }) => css`
    position: absolute;
    font-size: 10px;
    color: ${theme.colors.greyText};
    right: 5px;
    bottom: 2px;
    z-index: 1;
  `}
`
