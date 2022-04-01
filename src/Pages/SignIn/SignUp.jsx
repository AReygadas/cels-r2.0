import React,{useState} from "react";
import Swal from "sweetalert2";

import { Background, Card, InputD, InputA, SingButton } from "./styles";

export const SignUp =()=>{
    const [credentials, setCredentials] = useState({
        id:0,
        nombre: '',
        correo: '',
        telefono: '',
        password: '',
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
          <Card>
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
            <InputD>
              <InputA
                placeholder="Contraseña"
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    password: e.target.value,
                  });
                }}
              />
            </InputD>
            <InputD>
              <InputA
                placeholder="Telefono"
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
                    telefono: e.target.value,
                  });
                }}
              />
            </InputD>
            <br />
            <SingButton onClick={()=>handleSubmit()}> Aceptar </SingButton>
          </Card>
        </Background>
      );
}
