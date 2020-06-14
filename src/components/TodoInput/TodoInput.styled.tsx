import styled from 'styled-components'

export const MyInput = styled.div`
  margin: 0 20px;
  
  height: 50px;
  border-bottom: 1px solid #D3D3D3;
  display: flex;
  
  span{
    font-size: 28px;
    height: 100%;
    padding: 10px 0;
    color: #7464C0;
    :hover{
      cursor: pointer;
    }
  }
  input{
    margin-left: 10px;
    width: 100%;
    border: transparent;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    color: #757575;
    ::placeholder {
      //color: #757575;
      color: #7464C0;
    }
  }
  
`