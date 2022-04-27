import React, { useState } from "react";
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
  Vid2
} from "./styles";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import Bg005 from "../../Images/login_loop.mp4";
import Bg006 from "../../Images/login_responsive_back.mp4";

export const SignUp = () => {
  const [credentials, setCredentials] = useState({
    nombre: "",
    apellidos:"",
    correo: "",
    password: "",
    telefono: "",
  });

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

  // const register = () => {
  //   Axios({
  //     method: "POST",
  //     data: credentials,
  //     withCredentials: true,
  //     url: "http://localhost:4000/register",
  //   }).then((res) => console.log(res));
  // };

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
            <TT01>Sign Up</TT01>
          </CardHeader>
          <div style={{ padding: "4%", height: "50vh" }}>

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
                placeholder="Apellidos"
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
            <InputD>
              <InputA
                placeholder="Telefono (Opcional)"
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    nombre: e.target.value,
                  });
                }}
              />
            </InputD>
            <br />
            <SingButton onClick={() => handleSubmit()}> Aceptar </SingButton>
          </div>
        </Card>
      </Padre>
    </Background>
  );
};
