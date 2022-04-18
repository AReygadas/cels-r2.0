import styled from 'styled-components';
import img1 from '../../../Images/Sec01.jpg'
import img2 from '../../../Images/Sec02.jpg'
import img3 from '../../../Images/Sec03.jpg'
import img4 from '../../../Images/Sec04.jpg'


export const Background = styled.div`    
    width:100%;
    height:100vh;
    position: relative;
    display:block ;
    background:transparent;
`; 

export const Background2 = styled.div`   
    width:100%;
    height:100vh;
    position: relative;
    display:block ;
    background:transparent;
    margin-top:3% ;
`; 


export const BackgroundImg = styled.div`    
    width:100%;
    height:100vh;
    position: relative;
    display:block ;
    background-image:url(${img4});
`; 

export const Vid = styled.video`
  position: flex;
  width:100vw ;
  z-index: -1;
  @media screen and (max-width: 600px) {
    display:flex;    
  }
  display: none;
`;

export const Vid2 = styled.video`
  position: flex;
  width: 100vw;
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

export const AsetImge= styled.img`
  width: 70% ;
  height: auto ;
`;

export const SubTitle=styled.p`
  font-size:1.2rem ;
  font-weight: 700;
  color:#fff;
  margin: 5%;
`
export const SubTitle3=styled.p`
  font-size:1.1rem ;
  font-weight: 700;
  color:#fff;
  margin: 5%;
`

export const Parrafo=styled.p`
  color:#fff;
  margin: 5%;
`
export const ScrollVertical=styled.div`
  
  display:flex;
  flex-direction:column;
  @media (min-width: 600px){
    height: 90vh ;
    display:block;
    overflow-x: scroll;
    overscroll-behavior-x: contain;
    scroll-snap-type: x proximity;
  }

`