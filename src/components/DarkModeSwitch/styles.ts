import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  display: inline-flex;
  align-items: center;

  div[aria-label='animation'] {
    height: 80px !important;
    width: fit-content;
  }
`

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  min-width: 45px;
  height: 25px;
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 21px;
    width: 21px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 50%;
  }
`

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    ${({ theme }) => css`
      background-color: ${theme.boxColors.selectedChat};
    `}
  }

  &:checked + ${Slider}:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`
