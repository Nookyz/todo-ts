import styled from 'styled-components'

export const MyTodoList = styled.div`
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  .todo-enter {
    opacity: 0;
  }
  .todo-enter-active {
    opacity: 1;
    transition: opacity 400ms ease-in;
  }
  .todo-exit {
    opacity: 1;
  }
  .todo-exit-active {
    opacity: 0;
    transition: opacity 400ms ease-in;
  }
  ::-webkit-scrollbar { 
    width: 5px; 
    height: 5px;
  }
  ::-webkit-scrollbar-button {
    background-color: #666;
  }
  ::-webkit-scrollbar-track {  
    background-color: #999;
  }
  ::-webkit-scrollbar-track-piece { 
    background-color: #ffffff;
  }
  ::-webkit-scrollbar-thumb { 
    height: 50px; 
    background-color: #ada7c9; 
    border-radius: 3px;
  }
  ::-webkit-scrollbar-corner { 
    background-color: #999;
  }
  ::-webkit-resizer { 
    background-color: #666;
  }
`
export const MyTodo = styled.div`
  margin: 0 20px;
  min-height: 50px;
  max-height: 500px;
  border-bottom: 1px solid #D3D3D3;
  display: flex;
  span{
    font-size: 22px;
    height: 100%;
    padding: 12px 0;
    color: #7464C0;
    :hover{
      cursor: pointer;
    }
  }
  .checkbox{
    width: 24px;
  }
  .star{
    width: 24px;
  }
  .delete{
    width: 24px;
    color: #34373d;
  }
  
`
export const MyTodoContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 0;  
  margin: 0 14px;
  font-size: 16px;
  width: 95%;
  color: ${(props: {completed: boolean}) => (props.completed ? '#c3c3c3' : '#34373d')};
  text-decoration: ${(props: {completed: boolean}) => (props.completed ? 'line-through' : 'none')};
`