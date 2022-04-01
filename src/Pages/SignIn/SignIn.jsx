import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { TT01, Background,Padre, Card, InputD, InputA, SingButton, Vid,LogoC,DivAcount } from "./styles";
import Logo from '../../Images/Logo.png'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from "gapi-script";


export const SignIn = () => {
  const [credentials, setCredentials] = useState({
    id:0,
    nombre:'',
    correo: '',
    telefono: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    
    console.log(credentials)
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      };
      let res = await fetch(
        "https://celsuniversity.academy/api/addUss",
        config
      );
      let json = await res.json();
      if (json.status === "User Saved") {
        Swal.fire({
          title: "Bienvenido",
          text: json.nombre,
          icon: "success",
          buttons: "Aceptar",
        }).then((respuesta) => {
          window.location = "/";
        });
        console.log(json);
      } else {
        Swal.fire({
          title: "Usuario Existente",
          text: "El correo que ingresaste ya esta en uso",
          icon: "warning",
          buttons: "Aceptar",
        });
      }
    } catch (error) {
      console.log(error);
    }
    console.log(credentials);
  };

  const responseGoogle = (response) => {
    console.log(response);
  }
  const responseGoogle2 = () => {
    console.log("Deslogueado");
  }

  useEffect(()=> {
    function start() {
      gapi.client.init({
        clientId: "567951774801-h1ll3t6sqsac1hldm26ioqihvigprrad.apps.googleusercontent.com",
        scope:""
        })
    }
    gapi.load('client:auth2', start)
  })

  return (
    <Background>
      <Vid loop autoPlay muted>
          <source src='https://celsuniversity.academy/login_loop.mp4' />
      </Vid>
      {/* <LogoC src={Logo} /> */}
      <Padre>
        <Card>
          <TT01>Login</TT01>
          <InputD>
            <InputA
              placeholder="Nombre"
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
              placeholder="Correo"
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
          <DivAcount>
          <input type='checkbox' />
          <p>Remember me</p> | <p>Forgot Password?</p>
          </DivAcount>
          <SingButton onClick={() => handleSubmit()}> Create newaccount </SingButton>
              <br />   <br />
              < GoogleLogin 
                clientId = "567951774801-h1ll3t6sqsac1hldm26ioqihvigprrad.apps.googleusercontent.com" 
                buttonText = "Iniciar sesión" 
                onSuccess = { responseGoogle } 
                onFailure = { responseGoogle } 
                cookiePolicy={'single_host_origin'} 
              />
          
          {/* <GoogleLogout
              clientId = "567951774801-h1ll3t6sqsac1hldm26ioqihvigprrad.apps.googleusercontent.com" 
              buttonText = "cerrar sesion" 
              onLogoutSuccess= { responseGoogle2 } 
          /> */}

        </Card>
      </Padre>
    </Background>
  );
};
