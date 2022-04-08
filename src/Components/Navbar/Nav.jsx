import React,{useState} from "react";
import { LinkO,Bar, Log, Linka, SignIN_Btn, DivPages } from "./styles";
import {  Link } from 'react-router-dom';
import Logo from '../../Images/Logo.png';

export const Nav =()=>{
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };    
    window.addEventListener('scroll', changeNavbarColor);

    return(
        <Bar style={colorChange ? {textAlign:'center',background:'#1C142F', 
        transition: '1.5s'} : {ckground:'transparent',transition: '1.5s'}}>
            <ul style={{display:"none"}}>
            <Linka><i className="fab fa-facebook-f"></i>. Facebook</Linka>    
            <Linka><i className="fab fa-instagram"></i> Instagram</Linka>    
            <Linka><i className="fab fa-whatsapp"></i> Whatsapp</Linka>    
            </ul>
            <Link to='/'> <Log src={Logo} /> </Link>   
            <ul style={{display:"none"}}>
            <DivPages>
            <Link to='/Business'><LinkO>Empresas</LinkO></Link>  
            <Link to='/'><LinkO>Escuelas</LinkO></Link>  
            <Link to='/'><LinkO>Gobierno</LinkO></Link>  
            <Link to='/'><LinkO>Embajadores</LinkO></Link>  
            </DivPages>
            </ul>
            <Link to='/SignIn'><SignIN_Btn>Sign In</SignIN_Btn> </Link>
        </Bar>
    )    
}

