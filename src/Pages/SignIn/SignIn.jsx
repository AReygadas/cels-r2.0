import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  CardHeader,
  TT01,
  Background,
  Padre,
  Card,
  InputD,
  InputA,
  SingButton,
  Vid,
  Vid2,
  DivAcount,
} from "./styles";
import { Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import { FaGooglePlusG, FaFacebookF } from "react-icons/fa";

import { useCookies } from "react-cookie";
import Cookies from "js-cookie";

import Bg005 from "../../Images/login_loop.mp4";
import Bg006 from "../../Images/login_responsive_back.mp4";
import BgLOg from '../../Images/Log0102.png'


export const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: "2d@a.com",
    password: "465 sss.12",
  });

  const [cookies, setCookie, removeCookie] = useCookies(["sessionCels"]);

  function onChangeCookie(token) {
    setCookie("sessionCels", token, { path: "/", maxAge: 60 });
  }
  const handleMSg = () => {
    const tok = cookies.sessionCels;
    console.log(tok);
  };
  const handleSubmit = async (e) => {
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      };
      let res = await fetch("http://localhost:3003/auth/login", config);
      let json = await res.json();

      if (json.token) {
        Swal.fire({
          title: "Bienvenido",
          text: json.nombre,
          icon: "success",
          buttons: "Aceptar",
        }).then((respuesta) => {
          onChangeCookie(json.token);
          window.location = "/";
        });
      } else {
        Swal.fire({
          title: "Ups!",
          text: "No hemos podido iniciar sesión ",
          icon: "warning",
          buttons: "Aceptar",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseGoogle2 = () => {
    console.log("Deslogueado");
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "567951774801-h1ll3t6sqsac1hldm26ioqihvigprrad.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <Background>
      <Vid loop autoPlay muted>
        <source src={Bg006} media="(min-width: 600px)" />
      </Vid>
      {/* <TextoAnimado src={Img002} media="(max-width: 600px)"/> */}
      <Vid2 loop autoPlay muted>
        <source src={Bg005} media="(max-width: 600px)" />
      </Vid2>
      {/* <LogoC src={Logo} /> */}
      <Padre>
        <Card style={{ height: "auto" }}>
          <CardHeader>
            
            {/* < GoogleLogin                 
                clientId = "567951774801-h1ll3t6sqsac1hldm26ioqihvigprrad.apps.googleusercontent.com" 
                buttonText = "Iniciar sesión" 
                onSuccess = { responseGoogle } 
                onFailure = { responseGoogle } 
                cookiePolicy={'single_host_origin'} 
                render={renderProps => (
                  <FaGooglePlusG size={45} onClick={renderProps.onClick} disabled={renderProps.disabled} />
                )}
            />        
               
            <FaFacebookF size={40} /> */}
            <img src={BgLOg} alt="Ruth"  style={{width:"150%", height:"110%", marginTop:"-30px"}}/>
          </CardHeader>
          <div style={{ padding: "4%", height: "50vh" }}>
          <br /><br /><br />
            <InputD>
              <InputA
                placeholder="Correo"
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    nombre: e.target.value,
                  });
                }}
              />
            </InputD>
            <InputD>
              <InputA
                placeholder="Contraseña"
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    correo: e.target.value,
                  });
                }}
              />
            </InputD>
            <br />
            <SingButton onClick={() => handleSubmit()}> Aceptar </SingButton>
            <br />
            <Link to="cels-r/Signup">
              <SingButton> Create newaccount </SingButton>
            </Link>
            <DivAcount>
              <p>Forgot Password?</p>
            </DivAcount>
            {/* <GoogleLogout
              clientId = "567951774801-h1ll3t6sqsac1hldm26ioqihvigprrad.apps.googleusercontent.com" 
              buttonText = "cerrar sesion" 
              onLogoutSuccess= { responseGoogle2 } 
          /> */}
          </div>
        </Card>
      </Padre>
    </Background>
  );
};
