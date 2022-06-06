import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 * {
  box-sizing: border-box;
   font-family:  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
		Fira Sans, Droid Sans, Helvetica Neue, sans-serif;   
 }

 :root {  
	--primary-background-color: rgb(255, 251, 224);
  --secondary-background-color: rgb(251, 245, 208);
  --primary-font-size:16px
  --primary-border-radius:0,75rem
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
    width: 100%;
    margin: 0 0.5 0 0.5rem
  }

  input {
    font-size: 1rem;
    background-color: var(--secondary-background-color)
  }

  button {  
    font-size: 1rem;
    margin:0.5rem 0 2rem 0 ;
    background-color: transparent;
    border-radius: 0.75rem; 
    padding: 0.5rem;
    width: 100%;
  }
button.edit {
margin: 0 0.5rem 0 0.5rem;

} 
 button.footer {
    border-radius: 0,5rem;
    width: 100%;
    box-shadow: 0 0 1rem 0 #000;
    margin: -10px 0 1rem 0;
    z-index: 10;
    background-color: var(--primary-background-color)
  }

  div.task {
    display: grid;
    grid-template-columns: 30px 3fr 1fr;
    margin: 10px;
  }
  div.edit {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span.task {
   margin-top: 0rem;
    width:60vw;
    word-wrap:break-word;
   &:hover{
     cursor: pointer
   }
  }

  span.accordion {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 0rem;
    &:hover{
      cursor: pointer
  }
  }
  span.dueDate{
    margin-left: auto
  }
  
  input::placeholder{
   text-align: center;
}
`;

export default GlobalStyle;
