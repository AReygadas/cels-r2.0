import styled,{keyframes} from 'styled-components'

//ANIMATIONS

const gradient = keyframes`
    0% {
        background-position: 0 0;
   }
    100% {
        background-position: 100% 0;
    }
`;

//COMPONENTS STYLED

export const Background=styled.div`
    
    background:transparent;    
    text-align:center;
`;


export const LogoC = styled.img`
  width: 16rem;
  height:auto;
  margin-top: 7%;

`;
export const Padre=styled.div`
   height: 100vh;
   width: 95vw;
   /*IMPORTANTE*/
  display: flex;
  justify-content: center;
  align-items: center;
  margin:auto ;
  max-width:500px ;
`;

export const Card = styled.div`
    color:#fff ;
    margin-top:5rem;
    margin: auto ;
    padding:15px 0 15px 0 ;
    display:flex ;
    //padding: 4% 3% 10% 3%;
    position: relative;        
    height: auto;
    width: 90vw;    
    box-shadow: 20px 20px 50px rgba(0,0,0,0.5);
    border-radius: 7px;
    background: rgba(255,255,255,0.1);
    overflow: contain;
    text-align:center;
    border-top: 1px solid rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(5px);
`;

export const DivAcount = styled.div`
  margin-top:4vh ;
  display:block;
  color:#fff ;
  width:100% ;
  text-align:right ;
 `
export const InputA = styled.input`
   border-style: none;
    background: transparent;
    outline: none;
    font-size: 1rem;
    width: 100%;    
    text-align: center;
    color:white;
    &::placeholder{
        color: rgb(255, 255, 255, 0.7);
    }
`;


export const InputD=styled.div`
    position: relative;
    padding: 10px;
    margin-top:20px;
    &::after{
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 0.1rem;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(to right, #b294ff, #57e6e6, #feffb8, #57e6e6, #b294ff, #57e6e6);
    background-size: 500% auto;
    animation: ${gradient} 3s linear infinite;
    }
`;

export const SingButton = styled.button`
  position: relative;
  text-align: center;
  margin-top: 5%;
  font-size: 1.2rem;
  background-color: transparent;
  border: 3px solid rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  padding: 5px 30px;
  color: #fff;
`;


export const LogoU = styled.img`
  padding-top: 3%;
  margin-bottom: 5%;
  height: auto;
  width: 10rem;
  margin-bottom: 5px;
  position: relative;
`;

export const Vid = styled.video`
  position: absolute;
  height:100vh ;
  z-index: -1;
  @media screen and (max-width: 600px) {
    display:flex;    
  }
  display: none;
`;

export const Vid2 = styled.video`
  position: absolute;
  width: 100vw;
  z-index: -1;
  @media screen and (min-width: 600px) {
    display:flex;    
  }
  display: none;
`;

export const Title1 = styled.h1`
  color: #fff;
  font-size: 5rem;
`;

export const Btn001 = styled.button`
  font-size: 1.7rem;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  border: none;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  color: #fff;
  background: linear-gradient(
    77deg,
    rgba(194, 0, 255, 1) 0%,
    rgba(0, 166, 255, 1) 100%
  );
`;

export const TT01=styled.h1`
    margin-top:-1rem;
`;

export const CardHeader = styled.div`
  background: linear-gradient(274deg, rgba(8,44,125,1) 0%, rgba(20,175,255,1) 100%);
  width: 40% ;
  padding: 30px 7px 7px 7px ;  

`