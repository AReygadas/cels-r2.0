import React,{useState} from "react";
import {Link } from 'react-router-dom';
import './styles.css';
export const PricingTab = () => {

const [mont,setMont]=useState(150);
const [mont2,setMont2]=useState("");

    const handleClick =(e)=>{

    }

  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="container">
            <div className="row" >

            <div className="col-sm-4">
                <div className="card text-center">
                  <div className="title">
                    {/* <i className="fa fa-paper-plane" aria-hidden="true"></i> */}
                    <h2>Obten tu cupon</h2>
                  </div>
                  <div className="price">
                    <h4>
                      <sup>$</sup>0
                    </h4>
                    <h4>
                      {mont2}
                    </h4>                 

                  </div>
                  <div className="option">
                    <ul>
                    <li>
                        <i className="fa fa-check" aria-hidden="true"></i> 1 semana de contenido 
                      </li>
                    <li>
                        <i className="fa fa-check" aria-hidden="true"></i> Examen de colocación 
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> Video Interactivo
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> CelsCards
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> CelsBook 
                      </li>
                      <li>
                        <i className="fa fa-times" aria-hidden="true"></i> Grammar
                      </li>
                      <li>
                        <i className="fa fa-times" aria-hidden="true"></i> Cels Audio
                      </li>
                    </ul>
                  </div>
                 <Link to="/SignUp"> <a className="a2" href="#">Obtener </a></Link>
                </div>
              </div>
              
            <div className="col-sm-4">
                <div className="card text-center">
                  <div className="title">
                    {/* <i className="fa fa-paper-plane" aria-hidden="true"></i> */}
                    <h2 >Mensual</h2>
                  </div>
                  <div className="price">
                    <h6 style={{textDecoration:"line-through",textDecorationColor:"#000",margin:"12px 2px 2px 2px",fontSize:"1rem", color:"#fff", padding: "0"}}>Inscripcion $499</h6>
                    <h4>
                      <sup>$</sup>{mont}
                    </h4>
                    <h4>
                      {mont2}
                    </h4>
                    <input placeholder="Tengo un cupon" onChange={(e) => {setMont(99)}}/>

                  </div>
                  <div className="option">
                    <ul>
                    <li>
                        <i className="fa fa-check" aria-hidden="true"></i> 4 semanas de contenido 
                      </li>
                    <li>
                        <i className="fa fa-check" aria-hidden="true"></i> Examen de colocación 
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> Videos Interactivos
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> CelsCards
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> CelsBook 
                      </li>
                      <li>
                        <i className="fa fa-times" aria-hidden="true"></i> Grammar
                      </li>
                      <li>
                        <i className="fa fa-times" aria-hidden="true"></i> Cels Audios
                      </li>
                    </ul>
                  </div>
                  <a className="a2" href="#">Comprar </a>
                </div>
            </div>

            <div className="col-sm-4">
                <div className="card text-center">
                  <div className="title">
                    {/* <i className="fa fa-plane" aria-hidden="true"></i> */}
                    <h2>Semestral</h2>
                  </div>
                  <div className="price">
                    <h4>
                      <sup>$</sup>594
                    </h4>
                  </div>
                  <div className="option">
                  <ul>
                    <li>
                        <i className="fa fa-check" aria-hidden="true"></i> 24 semanas de contenido 
                      </li>
                    <li>
                        <i className="fa fa-check" aria-hidden="true"></i> Examen de colocación 
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> Videos Interactivos
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> CelsCards
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> CelsBook 
                      </li>
                      <li>
                        <i className="fa fa-times" aria-hidden="true"></i> Grammar
                      </li>
                      <li>
                        <i className="fa fa-times" aria-hidden="true"></i> Cels Audios
                      </li>
                    </ul>
                  </div>
                  <a className="a2" href="#">Comprar </a>
                </div>
            </div>

            <div className="col-sm-4">
                <div className="card text-center">
                  <div className="title">
                    {/* <i className="fa fa-rocket" aria-hidden="true"></i> */}
                    <h2>Anual</h2>
                  </div>
                  <div className="price">
                    <h4>
                      <sup>$</sup>1,188
                    </h4>
                  </div>
                  <div className="option">
                  <ul>
                    <li>
                        <i className="fa fa-check" aria-hidden="true"></i> 52 semanas de contenido 
                      </li>
                    <li>
                        <i className="fa fa-check" aria-hidden="true"></i> Examen de colocación 
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> Videos Interactivos
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> CelsCards
                      </li>
                      <li>
                        <i className="fa fa-check" aria-hidden="true"></i> CelsBook 
                      </li>
                      <li>
                        <i className="fa fa-times" aria-hidden="true"></i> Grammar
                      </li>
                      <li>
                        <i className="fa fa-times" aria-hidden="true"></i> Cels Audios
                      </li>
                    </ul>
                  </div>
                  <a className="a2" href="#">Comprar </a>
                  
                </div>
            </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
