import styled from 'styled-components'
import imgVetor from '../assets/images/image_5-removebg-preview.png'


export const Container = styled.div`
     display: flex;
     align-items: stretch;
     height: 100%;
 
`;

export const Aside = styled.aside`
    background: linear-gradient(180deg, #1482FC 0%, #9513FB 100%);

    flex:5;
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 36.6rem;
    min-height: 59.3rem;
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
    align-items: center;
    justify-content: center;

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


`;

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    /*height: 59.37rem; >>> limitou o container filho e seus filhos*/
    min-height: 56.06rem;
    width: 47.5rem;

    margin: 3.31rem 2.5rem 0 1.7rem;
    padding: 3.1rem 0;
    box-sizing: border-box;
    
`;

export const ContainerForm = styled.div`
    
    width: 535px;
    min-height: 600px;

    margin: 5.68rem 7rem;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    > button {
        align-self : center;
    }


`;

export const HeaderForm = styled.div`
    margin-bottom: 1.87rem; /* 30px */
    h2 {
        font-size: 1.75rem;
        line-height: 2.3rem;

        margin-bottom: 0.75rem;
    }

    p {
        line-height: 1.62rem;

    }

`;

export const ButtonForm = styled.button`

    background-color:#3754DB;;
    width: 12.25rem;
    height: 2.8rem;
    border-radius: 3.1rem;

    outline: none;
    border: none;

    margin-top: 1.87rem;

    color: white;


    &:disabled{
        opacity: 0.5;
        cursor: not-allowed;
    }


`;

export const ContentForm = styled.div`
    width: 100%;
   
`;

export const GroupButtonsHoursSelected = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.14rem;
    height: 3.43rem;
    justify-content: space-around;
    
    

`;

export const ContentInputHours = styled.div`
margin-bottom: 2.31rem;

`