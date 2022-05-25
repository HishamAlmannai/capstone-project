import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 * {
  box-sizing: border-box;
   font-family:  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
		Fira Sans, Droid Sans, Helvetica Neue, sans-serif; 
  
 }

 html {
    
    display: flex;
    justify-content: center;
  
  }; 
ul {
  list-style-type: none;
}

  input {
    font-size: 1rem
  }

  button {
    font-size: 1rem;
    margin: 1rem
  }

  span {
    margin :1rem
  }
`;

export default GlobalStyle;
