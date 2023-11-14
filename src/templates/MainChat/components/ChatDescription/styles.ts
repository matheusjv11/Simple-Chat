import styled, { css } from 'styled-components'
import { Wrapper as IconButton } from '@/components/IconButton/styles'

export const Wrapper = styled.main<{ isOpen: number }>`
  ${({ theme, isOpen }) => css`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    visibility: visible;
    pointer-events: none;

    ${!!isOpen &&
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
    overflow: auto;
    display: flex;
    flex-direction: column;
    pointer-events: fill;
    top: 0;
    right: 0;
    width: 25vw;
    height: 100%;
    z-index: 2;
    color: ${theme.colors.heading};
    background-color: ${theme.boxColors.primaryBackground};
    transform: translate3d(25vw, 0, 0);
    transition: transform 300ms cubic-bezier(0.33, 1, 0.68, 1);

    ${IconButton} {
      position: absolute;
      pointer-events: auto;
      z-index: 1;
      width: 3.5rem;
      top: 0.5rem;
      left: 0.5rem;

      > svg {
        color: white;
      }
    }

    @media (max-width: 1200px) {
      transform: translate3d(35rem, 0, 0);
      width: 35rem;
    }

    @media (max-width: 750px) {
      transform: translate3d(100%, 0, 0);
      width: 100%;
    }

    svg {
      height: 24px;
      min-width: 24px;
    }

    p {
      line-height: 2.2rem;
    }
  `}
`

export const FlexColumn = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  `}
`

export const CoverPicture = styled.div`
  ${({ theme }) => css`
    height: 50vh;
  `}
`

export const InfoCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    padding: 1.5rem;
    display: grid;
    place-items: center;
    border-top: 1px solid ${theme.colors.border};
    pointer-events: auto;
  `}
`
export const TextAndIcon = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  `}
`
