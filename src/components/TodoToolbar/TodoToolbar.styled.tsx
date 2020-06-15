import styled from 'styled-components'

export const MyToolbar = styled.div`
  display: flex;
  padding: 12px 16px 0;
  width: 100%;
  justify-content: space-between;
  
`
export const MyToolbarTitle = styled.div`
  height: 38px;
  h2{
    height: 38px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #7464C0;
  }
`

export const MyToolbarSort = styled.button`
  margin-left: 20px;
  height: 38px;
  display: flex;
  align-items: center;
  padding: 0 5px ;
  background: ${(props: {bg: boolean}) => (props.bg ? '#E0E0E0' : '#fff')}; 
  border: transparent;
  outline: none;
  color: #7464C0;
  :hover{
    background: #E0E0E0;
    border-radius: 3px;
    cursor: pointer;
  }
`

