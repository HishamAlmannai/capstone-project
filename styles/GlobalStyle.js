import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
		Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}


html {
    
    display: flex;
    justify-content: center;
  };
  
  body {
    padding: 10;
	  margin: 0;
    display: grid;
    grid-template-rows: auto 1fr auto;
    position: relative;
  }
  `;
