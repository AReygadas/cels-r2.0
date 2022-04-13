import React, { useState } from "react";
import {
  LinkO,
  Bar,
  Log,
  Linka,
  SignIN_Btn,
  DivPages,
  ImageM,
  MenuResponsive,
  Menu,
  SideMenu
} from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import MenuIcon from "../../Images/menu.png";
import { BsFacebook,BsWhatsapp, BsInstagram,BsBuilding,BsFillPeopleFill } from 'react-icons/bs';
import {IoIosSchool} from 'react-icons/io';
import {FaArchway} from 'react-icons/fa'
export const Nav = () => {
  const [colorChange, setColorchange] = useState(false);
  const [Responsiv, setResponsiv] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
    <Bar
      style={
        colorChange
          ? { textAlign: "center", background: "#1C142F", transition: "1.5s" }
          : { background: "transparent", transition: "1.5s" }
      }
    >
      <ImageM src={MenuIcon} alt="Menu" onClick={()=>{setResponsiv(!Responsiv)}}/>

      <MenuResponsive>
        <Link to="/">      
          <Log src={Logo} />
        </Link>
        <Link to="/SignIn">
          <SignIN_Btn>Sign In</SignIN_Btn>
        </Link>
      </MenuResponsive>

      <Menu>
        <ul style={{display:'flex'}}>
          <Linka>
            <i className="fab fa-facebook-f"></i>. Facebook
          </Linka>
          <Linka>
            <i className="fab fa-instagram"></i> Instagram
          </Linka>
          <Linka>
            <i className="fab fa-whatsapp"></i> Whatsapp
          </Linka>
        </ul>
        <Link to="/">
          {" "}
          <Log src={Logo} />{" "}
        </Link>
        <ul>
          <DivPages>
            <Link to="/Business">
              <LinkO>Empresas</LinkO>
            </Link>
            <Link to="/">
              <LinkO>Escuelas</LinkO>
            </Link>
            <Link to="/">
              <LinkO>Gobierno</LinkO>
            </Link>
            <Link to="/">
              <LinkO>Embajadores</LinkO>
            </Link>
          </DivPages>
        </ul>
        <Link to="/SignIn">
          <SignIN_Btn>Sign In</SignIN_Btn>{" "}
        </Link>
      </Menu>
    </Bar>
    
    <SideMenu active={Responsiv}>
       <ul>
          <Linka >
          <BsFacebook style={{color:'#4267B2'}}/> Facebook
          </Linka>
          <Linka>
            <BsInstagram style={{color:'#8a3ab9'}}/> Instagram
          </Linka>
          <Linka>
            <BsWhatsapp style={{color:'#075E54'}}/> Whatsapp
          </Linka>
          <Linka>
            <BsBuilding /> Empresas
          </Linka>
          <Linka>
            <IoIosSchool /> Escuelas
          </Linka>
          <Linka>
            <FaArchway /> Gobierno
          </Linka>
          <Linka>
            <BsFillPeopleFill /> Embajadores
          </Linka>
        </ul>
    </SideMenu>
    
    </>
  );
};
