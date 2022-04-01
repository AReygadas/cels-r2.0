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
        <Bar style={colorChange ? {background:'#1C142F', 
        transition: '1.5s'} : {background:'transparent',transition: '1.5s'}}>
            <Linka><i className="fab fa-facebook-f"></i>. Facebook</Linka>    
            <Linka><i className="fab fa-instagram"></i> Instagram</Linka>    
            <Linka><i className="fab fa-whatsapp"></i> Whatsapp</Linka>    
            <Link to='/' style={{margin:'0 0 0 25%'}}> <Log src={Logo} /> </Link>   
            <DivPages>

            <Link to='/'><LinkO>Empresas</LinkO></Link>  
            <Link to='/'><LinkO>Escuelas</LinkO></Link>  
            <Link to='/'><LinkO>Gobierno</LinkO></Link>  
            <Link to='/'><LinkO>Embajadores</LinkO></Link>  
            </DivPages>
            <Link to='/SignIn'><SignIN_Btn>Sign In</SignIN_Btn> </Link>
        </Bar>
    )
    
}