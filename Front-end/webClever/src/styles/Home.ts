import styled from 'styled-components'
import imgVetor from '../assets/images/image_5-removebg-preview.png'

export const Container = styled.div`
     display: flex;
     align-items: stretch;
     height: 100vh;
 
`;

export const Aside = styled.aside`
    background: linear-gradient(180deg, #1482FC 0%, #9513FB 100%);

    flex:5;
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 36.6rem;
    height: 59.3rem;
    img {
        margin: 3.2rem 3.2rem; /* em torno de 50px */
        align-self: flex-start;
        max-width: 11.8rem; /* 189.17px*/
    }
    strong{
        max-width: 23.5rem;
        text-align: left;
        color: white;
        font-size: 2.5rem;
        margin-left: 4.9rem;
        /* 166px do topo , 66px do elemento logo */
    }
    p {
        margin: 1.5rem 1.6rem 0 16.68rem;
        color: white;
        text-align: left;
        width: 18.56rem;
        height: 5.6rem;
        font-size: 1.12rem;
        line-height: 1.8rem;
    }
`;

export const Main = styled.main`
    flex: 7;
    display: flex;

`;

export const VetorImgWrapper = styled.div`
    width: 48.11rem;
    height: 62.85rem;
    left: 0.5rem;
    top: 16.2rem;
    position: absolute;
    z-index: 1;

    background: url(${imgVetor}) no-repeat;
    mix-blend-mode: multiply;


`
