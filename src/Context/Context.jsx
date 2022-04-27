import React, { createContext, useState, useEffect } from "react";
import { useCookies } from 'react-cookie';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

  // const sessionValidate = async (e) => {

  //   let status = false;

  //   let id;
  //   if (IsChek) {
  //     id = { session_id: window.localStorage.getItem("session_id") };
  //   } else {
  //     console.log(IsChek);
  //     id = { session_id: window.sessionStorage.getItem("session_id") };
  //   }

  //   try {
  //     //Configuracion para la peticion
  //     let config = {
  //       method: "POST", //metodo de la llamada a la API
  //       headers: {
  //         //Headers de la llamada estos nunca cambian
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(id), //contenido json de la llamada. {"session_id":"654654894321" }
  //     };
  //     // Fetch de la llamada a la API
  //     let res = await fetch(
  //       "http://35.167.62.109/storeutags/security/ping",
  //       config
  //     );
  //     //Recibes la respuesta del fetch con los datos.
  //     let json = await res.json();
  //     //Imprime Json en consola

  //     // Valida si la respuesta fue exitosa
  //     if (json.status === "success") {
  //       //Cambia el estatus de logueo del usuario
  //       status = true;
  //       //Ventana modal con el mensaje de confirmacion
  //       /*  swal({
  //         title: "Welcome!!",
  //         text: json.data.customer.full_name,
  //         icon: "info",
  //         buttons: "Ok",
  //       }); */
  //     } else {
  //       //Enb caso de que la api mande mensaje de error regresa el modal de error
  //       // swal({
  //       //   title: "Error",
  //       //   text: "An error has occurred !! - " + json.error_code,
  //       //   icon: "error",
  //       //   buttons: "Ok",
  //       // });
  //     }
  //   } catch (error) {
  //     //Atrapa cualquier error no controlado por la api
  //     //Imprime en consola el error
  //     console.log(error);
  //   }
  //   //Actualiza el estatus de logueo del usuario
  //   setIsAuth(status);
  // };
  // //Hook para validar si se recordara al usuario
  // const [IsChek, setIsChek] = useState(() => {

  //   if (window.localStorage.getItem("check") === null) {
  //     return false;
  //   } else {
  //     return window.localStorage.getItem("check");
  //   }
  // });

  //Hook para controlar el estado del usuario

  const [cookies, setCookie, removeCookie] = useCookies(['sessionCels']);
  const [IsAuth, setIsAuth] = useState(() => {
    //Aqui actualizas el estado del usuario.
    const tok = cookies.sessionCels;
    console.log(tok)
    if (tok) {
      return true;
    } else {
      return null
      // return sessionValidate();
    }
  });


  useEffect( () => {



  });

  const value = {
    //Variable para validar si el usuario esta logueado
    IsAuth,
    //Metodo para guardar el session_id en sessionStorage
    activateAuth: (session_id) => {
      setIsAuth(session_id);
      // if (IsChek) {
      //   return window.localStorage.setItem("session_id", session_id);
      // } else {
      //   return window.sessionStorage.setItem("session_id", session_id);
      // }
    },
    //Metodo para cerrar sesion
    // removeAuth: () => {
    //   //Cambia el estado del usuario a false
    //   setIsAuth(false);
    //   //Borra el sessionStorage
    //   if (IsChek) {
    //     window.localStorage.removeItem("session_id");
    //     window.localStorage.removeItem("full_name");
    //     window.localStorage.removeItem("check");
    //   } else {
    //     window.sessionStorage.removeItem("session_id");
    //     window.sessionStorage.removeItem("full_name");
    //     window.sessionStorage.removeItem("check");
    //   }
    // },
    // //
    // IsChek,
    // acticateChek: (val) => {
    //   setIsChek(val);
    //   window.localStorage.setItem("check", val);
    // },

    // counter,
    // contador: (count) => {
    //   setCounter(count);
    // },
  };
  //regresamos el Data Provider que envuelve a la aplicacion
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
