import React from "react";
import { Row, Col4, Col5, Titulo0,Parrafo0,ColAuto } from "../../../GlobalStyles";
import { Background2 } from "./styles";

export const Section3 = () => {
  return (
      <Background2 >
          <br />
         
    <Row>
   <ColAuto>
        <iframe title="This is a unique title" 
          src="https://player.vimeo.com/video/698792299?h=4bc3b1cdf3&color=ff0179&title=0&byline=0&portrait=0"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
       ></iframe>
      </ColAuto>
      <ColAuto>
        <Titulo0>OEM </Titulo0>
        <Parrafo0>Desarrollamos nuestro propio método para ti, para ayudarte, OEM.</Parrafo0>
        <br />
        <Parrafo0>OBSERVE, ENGAGE AND MASTER.</Parrafo0>
        <br />
        <Parrafo0> En Cels University desarrollamos OEM, una
        metodología especializada para la enseñanza eficaz del idioma inglés;
        está enfocado en las áreas de aprendizaje: “Observe”, observa y aprende,
        “Engage”, acopla y ejercita, “Master”, domina y aplica.</Parrafo0>
      </ColAuto>
    </Row>
    </Background2>
  );
};
