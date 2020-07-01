import styled from 'styled-components'

export const MyMenu = styled.div`
  background: #f4f4f4; 
  width: 280px;
  border-right: 1px solid #D3D3D3;
  transition: width 0.5s ease-in-out;
  width: ${(props: {open: boolean}) => (props.open ? "280px" : "50px")};
  @media screen and (max-width: 375px){
    width: ${(props: {open: boolean}) => (props.open ? "100vw" : "50px")};
  }
`
export const MyMenuHeader = styled.div`
  margin: 12px 0;
  padding: 0 10px;
  
  width: 100%;
  height: 30px;
  
  span{
    height: 100%;
    padding: 3px;
    color: #34373d;
    transition: all 0.2s ease-in-out;
    :hover{
      background: #ada7c9;
      cursor: pointer;
      box-shadow: 0 0 2px rgba(0,0,0,0.4);
      color: #FFF;
    }
  }
`
export const MyMenuNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  a{
    display: grid;
    grid-template-columns: 35px 1fr 25px;
    padding: 8px 0 8px 13px;
    align-items: center;
    color: #34373d;
    transition: all 0.2s ease-in-out;
    :hover{
      background: #E0E0E0;
    }
    span:first-child{
      font-size: 24px; 
      margin-right: 10px;
    }
    
    .title-todo{
      display: ${(props: {open: boolean}) => (props.open ? null : 'none')};
      animation: ${(props: {open: boolean}) => (props.open ? 'showText 0.7s ease-in-out' : 'hideText 0.7s ease-in-out')};
      opacity: ${(props: {open: boolean}) => (props.open ? '1' : '0')};
      @keyframes showText {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes hideText {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    }
    .count-todo{     
      display: ${(props: {open: boolean}) => (props.open ? 'flex' : 'none')};     
      animation: ${(props: {open: boolean}) => (props.open ? 'showText 0.7s ease-in-out' : 'hideText 0.7s ease-in-out')};
      @keyframes showText {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      @keyframes hideText {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    }
  }
  .active-link{
    color: #7464C0;
  }
`