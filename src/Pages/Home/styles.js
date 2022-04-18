import styled, { keyframes } from "styled-components";

const gradient = keyframes`
    0% {
        background-position: 0 0;
   }
    100% {
        background-position: 100% 0;
    }
`;

export const Background1 = styled.div`
  background: linear-gradient(
    77deg,
    rgba(0, 127, 255, 1) 0%,
    rgba(0, 255, 233, 1) 100%
  );
  height: 100vh;
  width: 100vw;
`;

export const Background2 = styled.div`
  background: #1c142f;
  height: 100vh;
  width: 100vw;
  padding-top: 12%;
  text-align: center;
`;

export const Card = styled.div`
  margin: auto;
  padding: 4% 3% 7% 3%;
  position: relative;
  height: 35vh;
  width: 20vw;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  justify-content: center;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

export const InputA = styled.input`
  border-style: none;
  background: transparent;
  outline: none;
  font-size: 1rem;
  width: 100%;
  text-align: center;
  color: white;
  &::placeholder {
    color: rgb(255, 255, 255, 0.7);
  }
`;

export const InputD = styled.div`
  position: relative;
  padding: 10px;

  &::after {
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
    background: linear-gradient(
      to right,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
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

export const Background = styled.div`
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
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
  position: fixed;
  height: 100%;
  width: auto;
  z-index: -1;
`;

export const Title1 = styled.h1`
  color: #fff;
  font-size: 5rem;
`;

export const Btn001 = styled.button`
  font-size: 1.7rem;
  padding: 10px;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  color: #fff;
  background: #9E7CFE;
`;

export const ChatbootContainer = styled.div`
  position: fixed;
  display:block ;
  bottom: 3px ;
  right:5px;
  text-align:right;
  z-index:500 ;
`

export const ChatImage = styled.img`
  height: 5rem ;
  right: 0;
  transition-property: opacity, left, top, height;
  transition-duration: 0.5s, 1s, 0.5s, 1s;
  cursor: pointer;
  &:hover{
    height: 7rem ;    
  
  }
`; 

export const TextoAnimado=styled.img`
  width:100vw;
  height: auto;
  padding-top:0 ;
`;
