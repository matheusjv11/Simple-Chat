import styled, { css } from 'styled-components'
import { MessageBoxProps } from '.'

type WrapperProps = {
  isCurrentUser: boolean
}

export const Wrapper = styled.main<WrapperProps>`
  ${({ theme, isCurrentUser }) => css`
    display: flex;
    align-items: flex-end;
    gap: 1rem;
    font-size: 13px;
  `}
`

export const MessageCard = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-radius: 8px;
    background-color: white;
    padding: 0.8rem;
    width: fit-content;
    padding-right: 3.5rem;
    padding-top: 0.3rem;

    &::after {
      content: '';
      border: 13px solid transparent;
      border-bottom: 15px solid white;
      clear: both;
      position: absolute;
      bottom: 0px;
      left: -11px;
      border-radius: 8px;
    }
  `}
`

export const Title = styled.div`
  color: lightsteelblue;
  font-weight: 600;
`

export const Box = styled.div``

export const SentHour = styled.div`
  ${({ theme }) => css`
    position: absolute;
    font-size: 10px;
    color: ${theme.colors.greyText};
    right: 5px;
    bottom: 2px;
  `}
`
