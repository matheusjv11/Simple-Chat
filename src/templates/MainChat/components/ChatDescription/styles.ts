import styled, { css } from 'styled-components'

export const Wrapper = styled.main<{ isOpen: boolean }>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    visibility: visible;
    pointer-events: none;

    ${isOpen &&
    css`
      ${DescriptionColumn} {
        transform: translate3d(0, 0, 0);
      }
    `}
  `}
`

export const DescriptionColumn = styled.aside`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    width: 25vw;
    height: 100%;
    z-index: 2;
    background-color: ${theme.boxColors.primaryBackground};
    transform: translate3d(25vw, 0, 0);
    transition: transform 300ms cubic-bezier(0.33, 1, 0.68, 1);
  `}
`

export const CoverPicture = styled.div`
  ${({ theme }) => css`
    height: 30vh;
  `}
`
