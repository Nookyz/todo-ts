import styled from 'styled-components'

export const MyTodoList = styled.div`
  max-height: 800px;
  overflow-y: auto;
  overflow-x: hidden;
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
  height: 50px;
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
  align-items: center;
  padding: 10px 0;  
  margin: 0 14px;
  font-size: 16px;
  width: 95%;
  color: #34373d;
  text-decoration: ${(props: {completed: boolean}) => (props.completed ? 'line-through' : 'none')};
`