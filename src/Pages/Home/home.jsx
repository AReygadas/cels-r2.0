import React,{useState} from "react";
import { Chatboot } from "../../Components/ChatBoot/Chatboot";
import "./style.css";
import {
  Background,
  TextoAnimado,
  Vid,
  Btn001,
  Title1,
  ChatbootContainer,ChatImage
} from "./styles";
import { PricingTab } from "../../Components/PricingTable/Pricing";
import "react-chatbot-kit/build/main.css";
import ChatIcon from '../../Images/Chat.png'
import Img002 from '../../Images/prueba-2.gif';

export const Home = () => {

  const [chat, setChat] = useState(false);  

  return (
    <>
      <Background>
       <Vid loop autoPlay muted>
          <source src='https://celsuniversity.academy/login_loop.mp4' />
        </Vid> 
       
          <TextoAnimado src={Img002} />
               </Background>
      <PricingTab />
      <ChatbootContainer >
        {chat &&
          <Chatboot />
        }
        <ChatImage src={ChatIcon} onClick={()=>setChat(!chat) } />
      </ChatbootContainer>
    </>
  );
};
