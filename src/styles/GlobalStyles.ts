import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  #root {
    height: 100vh;
    width: 100%;
    max-width: 350px;
    margin: auto;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`

export default GlobalStyle
