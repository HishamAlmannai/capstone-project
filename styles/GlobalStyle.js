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
    align-items: center;
    font-size: 1rem;
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
    
    li {
      transition: 1
    }

    li:not(:first-child){
    margin-top: -10px
    }
    
  form {
  display: flex;  
  flex-direction: column;
  width: 100%;
  margin: 0.5rem
  }

  input {
    font-size: 1rem;
  }

  button {  
    font-size: 1rem;
    margin: 1rem;
  }
  
  article {
    display: flex;
    flex-direction: column;
    background-color: orange;
    border-radius: 0.5rem 0.5rem 0 0;
    box-shadow: 0 0 1rem 0 #000;
  }

  article.accordion {
    background-color: green;
  }


  div.task {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    
  }
  div.edit {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between
  }

  span.task {
    background-color: black;
   margin-top: 0.5rem;
  }

  li:hover {
    transform: translateY(-10px);
  }
  span.accordion {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 0.5rem;

  }

  span.dueDate{
    margin-left: auto
  }
`;

export default GlobalStyle;
