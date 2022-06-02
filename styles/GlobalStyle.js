import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 * {
  box-sizing: border-box;
   font-family:  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
		Fira Sans, Droid Sans, Helvetica Neue, sans-serif; 
  
 }

 html {
       background-color: rgb(255, 251, 224)
  }; 

  main {
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center ;
  }

  h2 {
    text-align: center
    }
    
    ul {
      list-style-type: none;
      margin: 0; 
      padding: 0; 
      position: relative
    }
      
  form {
    display: flex;  
    flex-direction: column;
    width: 95%;
    margin: 0.5rem
  }

  input {
    font-size: 1rem;
  }

  button {  
    font-size: 1rem;
    margin: 1rem;
    background-color: transparent;
    border-radius: 0.5rem;
    padding: 0.5rem
  }
  
  article {
    display: flex;
    flex-direction: column;
    border-radius: 0.75rem ;
    box-shadow: 0 0 1rem 0 #000;
    background-color: rgb(255, 251, 224);
  }

  article.accordion {
    padding: -20px;
  }

  div.task {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    margin: 10px;
  }
  div.edit {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between
  }

  span.task {
   margin-top: 0.5rem;
   &:hover{
     cursor: pointer
   }
  }

  span.accordion {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 0.5rem;
    &:hover{
      cursor: pointer
  }

  span.dueDate{
    margin-left: auto
  }
  }
`;

export default GlobalStyle;
