import React,{useState} from "react";
import { Chatboot } from "../../Components/ChatBoot/Chatboot";
import {
  Background,
  TextoAnimado,
  Vid,
  Btn001,
  Title1,
  ChatbootContainer,ChatImage
} from "./styles";
// import { PricingTab } from "../../Components/PricingTable/Pricing";
import "react-chatbot-kit/build/main.css";
import ChatIcon from '../../Images/Chat.png'
import Img002 from '../../Images/prueba-2.gif';
// import {Card} from '../../Components/ProductCard/Card'
import { Section1 } from "./Sections/Section1";
import { Section2 } from "./Sections/Section2";

export const Home = () => {

  const [chat, setChat] = useState(false);  

  return (
    <>
{/* 
    <TextoAnimado src={Img002} />
      
       <Vid loop autoPlay muted>
          <source src='https://celsuniversity.academy/login_loop.mp4' />
        </Vid> 
    <PricingTab /> 
      <Card />*/}
      <Section1 />
      <Section2 />

      <ChatbootContainer >
        {chat &&
          <Chatboot />
        }
        <ChatImage src={ChatIcon} onClick={()=>setChat(!chat) } />
      </ChatbootContainer>
    </>
  );
};
