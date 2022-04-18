import styled from "styled-components";
import banner from "../../Images/fondoMenu.png"

export const Bar =styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  text-align: center;
  justify-content:center ;
  //background: #1C142F;;
  //background: rgba(20,20,20,.1)!important;
  background:transparent ;
  /* -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px); */
  z-index: 99999;
  text-align: left;
  display: flex;
  color: #fff;  
  margin: 0;
  padding:0 ;
    
`;

export const Linka = styled.h1`
  text-align: left;
  font-weight: 300;
  margin-left:1rem ;
  padding-left: 1rem;  
  font-size: 1.2rem;
  margin-top:1rem;
  
  &:hover{
    color:#00c3ff;
  }
`;

export const Log = styled.img`
  margin: 0.7rem 1rem 0.5rem 5% ;
  height: 3.5rem;
  width: auto;
`;

export const SignIN_Btn = styled.button`
  color:#fff ;
  position: fixed;
  right: 0.5rem;
  top: 1rem;
  //box-shadow:3px 3px 3px rgba(255,255,255,0.5) ;
  font-size: 1.29rem;
  padding: 4px 13px;
  background:#1C142F; 
  border-radius: 7px;  
  border-bottom:2px solid #8e9ed3;
  border-left:1px solid #8e9ed3;
  border-right:1px solid #8e9ed3;
  //agregas el gradiente a las esquina
  border-top:0 ;

  cursor: pointer;  
  &:hover{
    background: linear-gradient(274deg, rgba(4,11,43,1) 0%, rgba(20,255,228,1) 100%);
  }
`;

export const LinkO=styled.h1`
  color:#fff ;
  font-size: 1.2rem;
  margin-right: 15px;
  text-align: right;
  font-weight: 300;
`;

export const DivPages=styled.div`
  margin-left:5% ;
  display: flex;
`;

export const ImageM=styled.div`
  position: absolute;
  left: 10px;
  margin-top: 10px;
  display:none ;
  cursor:pointer;
  @media screen and (max-width: 600px) {
    display:flex;    
  }
`;

export  const MenuResponsive =styled.div`
 @media screen and (max-width: 600px) {
    display:flex;    
  }
  display: none;
`;

export  const Menu =styled.div`
width:100% ;
 @media screen and (min-width: 600px) {
    display:flex;    
  }
  display: none;
`;

export const SideMenu =styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background:url(${banner}) no-repeat;  /* Black w/opacity */
  background-size: 100vw ;
  width: ${props => props.active ? '100%' : '0'};
  height: 100%;
  overflow-x: hidden; /* Disable horizontal scroll */
  color: #000 ;
  padding-top: 60%;
  transition: 0.5s ease-out;
  text-align: left;
  
`;

export const Row =styled.div`
  width: 100% ;
  height:auto ;
  display: flex ;
`
export const Col =styled.div`
  width: ${props => props.sz};
 
`

export const Sepa =styled.div`
  width: 90%;
  height: 2px ;
  background:rgba(20,20,20,0.2) ;
  margin-left:5% ;
 
`
