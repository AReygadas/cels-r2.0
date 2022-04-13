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
  SideMenu,Row,Col
} from "./styles";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import MenuIcon from "../../Images/menu.png";
import MenuIcon1 from "../../Images/menu1.png";
import MenuIcon2 from "../../Images/menu2.png";
import {
  BsFacebook,
  BsWhatsapp,
  BsInstagram,
  BsBuilding,
  BsFillPeopleFill,
} from "react-icons/bs";
import { IoIosSchool } from "react-icons/io";
import { FaArchway, FaBars } from "react-icons/fa";
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
        <ImageM>
          <FaBars
            size={45}
            onClick={() => {
              setResponsiv(!Responsiv);
            }}
          />
        </ImageM>

        <MenuResponsive>
          <Link to="/">
            <Log src={Logo} />
          </Link>
          <Link to="/SignIn">
            <SignIN_Btn>Sign In</SignIN_Btn>
          </Link>
        </MenuResponsive>

        <Menu>
          <Row >
            <Col sz='40%'>
              <ul >
            <DivPages>
                <Linka>
                  <BsFacebook /> Facebook
                </Linka>
                <Linka>
                  <BsInstagram /> Instagram
                </Linka>
                <Linka>
                  <BsWhatsapp /> Whatsapp
                </Linka>
              </DivPages>
              </ul>
            </Col>
            <Col sz='10%'>
              <Link to="/">
                <Log src={Logo} />
              </Link>
            </Col>
            <Col sz='50%'>             
              <ul>
                <DivPages>
                  <Link to="/Business">
                   <LinkO><BsBuilding />Empresas</LinkO>
                  </Link>
                  <Link to="/">
                    <LinkO><IoIosSchool />Escuelas</LinkO>
                  </Link>
                  <Link to="/">
                    <LinkO><FaArchway /> Gobierno</LinkO>
                  </Link>
                  <Link to="/">
                    <LinkO><BsFillPeopleFill />Embajadores</LinkO>
                  </Link>
                </DivPages>
              </ul>
              <Link to="/SignIn">
                <SignIN_Btn>Sign In</SignIN_Btn>{" "}
              </Link>
            </Col>
          </Row>
        </Menu>
      </Bar>

      <SideMenu active={Responsiv}>
        <ul>
          <Linka style={{ color: "#4267B2" }}>
            <BsFacebook /> Facebook
          </Linka>
          <Linka style={{ color: "#8a3ab9" }}>
            <BsInstagram /> Instagram
          </Linka>
          <Linka style={{ color: "#075E54" }}>
            <BsWhatsapp /> Whatsapp
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
