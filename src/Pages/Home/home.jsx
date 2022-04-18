import React,{useState} from "react";
import { Chatboot } from "../../Components/ChatBoot/Chatboot";
import { ChatbootContainer, ChatImage} from "./styles";
import "react-chatbot-kit/build/main.css";
import ChatIcon from '../../Images/Chat.png'
import { Section1 } from "./Sections/Section1";
import { Section2 } from "./Sections/Section2";
import { Section3 } from "./Sections/Section3";
import { Section4 } from "./Sections/Section4";

export const Home = () => {

  const [chat, setChat] = useState(false);  

  return (
    <>      
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <ChatbootContainer >
        {chat &&
          <Chatboot />
        }
        <ChatImage src={ChatIcon} onClick={()=>setChat(!chat) } />
      </ChatbootContainer>
    </>
  );
};
