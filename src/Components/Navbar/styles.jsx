import styled from "styled-components";

export const Bar =styled.div`
    
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    text-align: center;
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
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");
  text-align: center;
  font-weight: 300;
  font-family: "Roboto", sans-serif;
  padding-left: 1rem;  
  font-size: 1.3rem;
  margin-top: auto;
  
  &:hover{
    color:#6C82FD;
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
  right: 3rem;
  top: 1rem;
  border: solid 1px #fff;
  font-size: 1.29rem;
  padding: 4px 13px;
  background: #1C142F;;
  border-radius: 8px;  
  cursor: pointer;
  &:hover{
    background:#06d7ff;
    
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
`