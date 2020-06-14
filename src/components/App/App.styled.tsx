import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    user-select: none;
  }
  #root{
    height: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }

`