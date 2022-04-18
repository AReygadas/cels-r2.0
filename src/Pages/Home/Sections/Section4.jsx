import React from "react";
import { SubTitle3, AsetImge, Parrafo,ScrollVertical, SubTitle } from "./styles";
import { Card } from "../../../Components/ProductCard/CardV2";
import { Row, Titulo0 } from "../../../GlobalStyles";
import { ColAuto } from "../../../GlobalStyles";
import As01 from "../../../Images/As01.png";
import As02 from "../../../Images/As02.png";
import As03 from "../../../Images/As03.png";

export const Section4 = () => {
  return (
  
      <Row>
        <ColAuto>
          <Titulo0>Cómo Funciona</Titulo0>
          <SubTitle3>
            Somos la mejor plataforma de aprendizaje en América Latina. Aprende
            inglés de la forma más rápida y divertida.
          </SubTitle3>
        </ColAuto>
        <ColAuto>
        <ScrollVertical>
          <div>
            <AsetImge src={As01} alt="" />
            <SubTitle>Donde Quieras y Cuando Quieras</SubTitle>
            <Parrafo>
              No importa dónde te encuentres, en casa o en el transporte
              público, estudia inglés con Cels University.
            </Parrafo>
          </div>
          <div>
            <AsetImge src={As02} alt="" />
            <SubTitle>A la Hora Que Quieras</SubTitle>
            <Parrafo>
              ¡Sabemos que tu tiempo es valioso! La plataforma de Cesl
              University estará disponible para ti 24/7 los 365 días del año.
            </Parrafo>
          </div>
          <div>
            <AsetImge src={As03} alt="" />
            <SubTitle>En cualquier Dispositivo</SubTitle>
            <Parrafo>
              En Cels University nos importa tu comodidad. Disfruta del acceso
              total de nuestra plataforma y ten al alcance todo nuestro
              contenido desde cualquier computadora, tablet o smartphone.
            </Parrafo>
          </div>
          </ScrollVertical>
        </ColAuto>
      </Row>
    
  );
};
