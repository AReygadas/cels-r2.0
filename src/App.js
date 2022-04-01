import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout/LayOut';
import {Home} from './Pages/Home/home';
import {SignIn} from './Pages/SignIn/SignIn';
import { SignUp } from './Pages/SignIn/SignUp';
import './index.css';

function App() {
  const ruta="/";
  //const ruta="/cels-r/";
  
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path={ruta} element = { <Home />}  />
        <Route exact path={ruta+"Signin"} element = { <SignIn />}  />
        <Route exact path={ruta+"Signup"} element = { <SignUp />}  />
      </Routes>
    </Layout>
  </BrowserRouter>
  );
}

export default App;

