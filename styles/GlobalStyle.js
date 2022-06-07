import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 * {
  box-sizing: border-box;
   font-family:  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
		Fira Sans, Droid Sans, Helvetica Neue, sans-serif;   
 }

 :root {  
	--primary-background-color: #fffbe0;
  --secondary-background-color: #fbf5d0;
  --secondary-color: #38a3eb;
  --primary-font-size:16px
  --primary-border-radius:0,75rem
  --primary-font-color: #000000 
  --secondary-font-color: #666666
}

 body {
  margin: 0;
}

 html {
       background-color: var(--primary-background-color);
       font-style: var(--primary-font-face)
  }; 

 main {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center ;
  }

 ul {
      list-style-type: none;
      margin: 0; 
      padding: 0; 
      
    }

`;

export default GlobalStyle;
