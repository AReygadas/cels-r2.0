import React from "react";
import { Background } from "./styles";
import { Vid ,Vid2} from "./styles";
import Bg002 from '../../../Images/bg02.mp4'
import Bg001 from '../../../Images/bg01.mp4'
import Img002 from '../../../Images/prueba-2.gif';
import {
  TextoAnimado
} from "./styles";

export const Section1 = () => {
  return (
    <Background inputColor="transparent">
        <Vid loop autoPlay muted>
          <source src={Bg002} media="(min-width: 800px)"/>        
        </Vid> 
        {/* <TextoAnimado src={Img002} media="(max-width: 600px)"/> */}
       <Vid2 loop autoPlay muted>         
          <source src={Bg001}  media="(max-width: 600px)"/>
        </Vid2>  
    </Background>
  );
};
