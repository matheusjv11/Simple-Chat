import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-display: swap;
        src: local(''),
            url('../fonts/poppins-light-webfont.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }
    
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: local(''),
            url('../fonts/poppins-medium-webfont.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-display: swap;
        src: local(''),
            url('../fonts/poppins-regular-webfont.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }
   
    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 600;
        font-display: swap;
        src: local(''),
            url('../fonts/poppins-semibold-webfont.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }

    @font-face {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: local(''),
            url('../fonts/poppins-bold-webfont.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: background-color 0.02s ease-in-out, color 0.02s ease-in-out;
        
        &::before,
        &::after {
            box-sizing: inherit;
        }
    }

    ${({ theme }) => css`
      html {
        font-size: 62.5%;
      }

      body {
        font-family: ${theme.font.family};
        font-size: ${theme.sizes.medium};
      }
    `}
    
    p {
        font-weight: 500;
    }

    .custom-scroll::-webkit-scrollbar {
        width: 10px;
    }
        
    .custom-scroll::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    .custom-scroll::-webkit-scrollbar-thumb {
        border-radius: 8px;
        border: 2px solid transparent;
        background-clip: content-box;

        ${({ theme }) => css`
          background-color: ${theme.boxColors.scroll};
        `}
    }
`
export default GlobalStyles
