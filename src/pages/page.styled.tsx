import styled from 'styled-components'

export const MyPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 375px){
    transition: width 1s ease;
    width: ${(props: {open: boolean}) => (props.open ? "0" : "100%")};
  }
`

