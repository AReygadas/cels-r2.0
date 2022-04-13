import styled from 'styled-components';


export const Background = styled.div`    
    width:100%;
    height:100vh;
    background:${props => props.inputColor || "palevioletred"};
`; 
export const Vid = styled.video`
  position: fixed;
  width: 100vw;
  z-index: -1;
  @media screen and (max-width: 600px) {
    display:flex;    
  }
  display: none;
`;

export const Vid2 = styled.video`
  position: fixed;
  width: 100vw;
  z-index: -1;
  @media screen and (min-width: 600px) {
    display:flex;    
  }
  display: none;
`;