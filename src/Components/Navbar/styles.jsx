import styled from "styled-components";

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
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 99999;
  text-align: left;
  display: flex;
  color: #fff;  
  margin: 0;
  padding:0.5vh ;
    
`;

export const Linka = styled.h1`
  text-align: left;
  font-weight: 300;
  margin-left:1rem ;
  padding-left: 1rem;  
  font-size: 1.7rem;
  margin-top: auto;
  
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
  box-shadow:3px 3px 3px rgba(20,20,20,0.5) ;
  font-size: 1.29rem;
  padding: 4px 13px;
  background: linear-gradient(274deg, rgba(11,32,134,1) 0%, rgba(167,247,238,1) 100%); 
  border-radius: 15px;  
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
`;

export const DivPages=styled.div`
  margin-left:5% ;
  display: flex;
`;
export const ImageM=styled.img`
  position: absolute;
  height: 3rem;
  width: auto ;
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
`

export  const Menu =styled.div`
 @media screen and (min-width: 600px) {
    display:flex;    
  }
  display: none;
`

export const SideMenu =styled.div`
  height: 100%;
  width: ${props => props.active ? '100%' : '0'};
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgba(20,20,20, 0.6); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  color: #fff ;
  padding-top: 25%;
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
  text-align: left;
  

`