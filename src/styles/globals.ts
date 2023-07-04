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
`
export default GlobalStyles

/*     ${({ theme }) => css`
      background-color: ${theme.};
    `} */
