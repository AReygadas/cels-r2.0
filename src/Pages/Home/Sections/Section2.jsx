import React from "react";
import {Background2} from './styles'
import { Card } from "../../../Components/ProductCard/Card";
import {Row, Titulo0} from '../../../GlobalStyles';

export const Section2 = () =>{

    return(
        <Background2>
            <Row>
                <Titulo0>Nuestros Productos</Titulo0>
            </Row>
                <Card />            
        </Background2>
    )
}

