import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}


html {
    
    display: flex;
    justify-content: center;
  };
  
  body {
    
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: relative;
  }

ul {
  list-style-type: none;
}
  `;
