import styled from 'styled-components';


export const Background = styled.div`    
    width:auto;
    height:100vh;
    background:${props => props.inputColor || "palevioletred"};
`; 

export const Background2 = styled.div`    
    width:100%;
    height:100vh;
    position: relative;
    display:block ;
    background:${props => props.inputColor || "palevioletred"};
`; 

export const Vid = styled.video`
  position: fixed;
  width:100vw ;

  z-index: -1;
  @media screen and (max-width: 600px) {
    display:flex;    
  }
  display: none;
`;

export const Vid2 = styled.video`
  position: fixed;
  height: 100vh;
  width: auto;
  z-index: -1;
  @media screen and (min-width: 600px) {
    display:flex;    
  }
  display: none;
`;
export const TextoAnimado=styled.img`
  width:100vw;
  height: auto;
  padding-top:0 ;
`;
