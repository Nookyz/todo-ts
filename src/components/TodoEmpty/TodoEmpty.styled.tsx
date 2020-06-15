import styled from 'styled-components'

export const MyTodoEmpty = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  h1{
    display: flex;
    justify-content: center;
    color: #34373d;
  }
  img{
    display: flex;
    align-self: center;
    width: 400px;
    height: 300px;
    @media screen and (max-width: 600px) {
      width: 200px;
      height: 150px;
    }
  }
`