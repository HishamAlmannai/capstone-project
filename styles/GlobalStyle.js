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
  margin: 0; 
    padding: 0; 
}

  input {
    font-size: 1rem
  }

  button {
    font-size: 1rem;
    margin: 1rem
  }

  
  article {
    display: flex;
    flex-direction: column;
    background-color: orange;
    border-radius: 0.5rem 0.5rem 0 0;
  }
  article.accordion {
    background-color: green;
    
  }
  div.task {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
  }
  div.edit {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between
  }

  span.task {
    background-color: black;
   
  }

  span.accordion {
    background-color: yellow;
    
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  
  }

  span.dueDate{
    margin-left: auto
  }
`;

export default GlobalStyle;
