import styled from 'styled-components';

export const Row =styled.div`
    width:100%;
    text-align:center;
    margin: 0;
    display: flex;
    flex-direction: column;
    @media (min-width: 600px) {
        display: flex;
        flex-direction: row;
    }
`;
export const ColAuto = styled.div`
   width:100% ;
   margin:5px;
   @media (min-width: 600px){
       width: 50% ;
   }
`

export const Titulo0 =styled.h1` 
    font-family:GoldmanBold;
    padding-top:15% ;
    font-size: 7vw ;
    color :#fff ;
    margin:auto;


`;
export const Parrafo0 =styled.p`
color:#FFF ;
font-size: 2vh ;
margin: 15px;
text-align: justify;

@media (min-width:600px){
  font-size:4vh ;
}
`
export const Col1 = styled.div`
    width:10% ;
`
export const Col2 = styled.div`
width:20% ;
`
export const Col3 = styled.div`
    width:30% ;
`
export const Col4 = styled.div`
    width:40% ;
    margin-left: 2% ;
    `
export const Col5 = styled.div`
    width:50% ;
    text-align:left ;
    margin-left: 2% ;
`
export const Col6 = styled.div`
    width:60% ;
`
export const Col7 = styled.div`
    width:70% ;
`
export const Col8 = styled.div`
    width:80% ;
`
export const Col9 = styled.div`
    width:90% ;
`
export const Col10 = styled.div`
    width:100% ;
`