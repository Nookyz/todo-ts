import styled from 'styled-components'

export const MyTodoList = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
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