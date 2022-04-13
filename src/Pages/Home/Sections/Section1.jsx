import React from "react";
import { Background } from "./styles";
import { Vid ,Vid2} from "./styles";
import Art from '../../../Images/bg02.mp4'
export const Section1 = () => {
  return (
    <Background inputColor="transparent">
        <Vid loop autoPlay muted>
          <source src={Art} media="(min-width: 800px)"/>        
        </Vid> 
        <Vid2 loop autoPlay muted>         
          <source src='https://celsuniversity.academy/login_loop.mp4'  media="(max-width: 600px)"/>
        </Vid2> 
    </Background>
  );
};
