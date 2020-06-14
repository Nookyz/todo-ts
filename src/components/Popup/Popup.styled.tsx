import styled from 'styled-components'

export const MyPopup = styled.div`
  position: absolute;
  top: 104px;
  right: 16px;
  z-index: 100;
  width: 240px;
  min-height: 200px;
  max-height: 250px;
  background: #fff;
  color: #7c7e81;
  border-radius: 3px;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  animation-name: popup;
  animation-duration: 0.7s;

  @keyframes popup {
    0%   {opacity: 0;}
    25%  {opacity: 0.25;}
    50%  {opacity: 0.5;}
    75%  {opacity: 0.75;}
    100% {opacity: 1;}
  }

  .popup-title{
    display: flex;
    justify-content: center;
    padding: 12px 0;
    border-bottom: 1px solid #D3D3D3;
    font-weight: 500;
  }
  .popup-wrap{
    padding: 10px 0;
  }
  .popup-item{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    span:last-child{
      font-size: 16px;
      margin-left: 10px;
    }
    :hover{
      background: #E0E0E0;
      color: #7464C0;
    }
  }
`