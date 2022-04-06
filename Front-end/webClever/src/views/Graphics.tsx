import { useState, useCallback, useEffect } from 'react';
import {useUser} from '../contexts/user'
import { Aside, ButtonForm, Container, ContainerForm, ContentForm, ContentInputHours, GroupButtonsHoursSelected, HeaderForm, Main, MainWrapper, VetorImgWrapper } from '../styles/Home';
import {ContentMetric, InputMetrics, ContainerMetrics} from '../components/CardMetrics/styles'
import { useForm, SubmitHandler} from "react-hook-form";
import {api} from '../services/api'
import { Input } from "../components/input/Input";
import { ButtonSelectedHours } from "../components/Button/styles";
import { ItemsForm } from "../components/itemsForm/ItemsForm";

import ImageLogo from "../assets/images/dark.svg";
import ImgPressure from '../assets/images/pressao-arterial.svg'
import ImgBpm from '../assets/images/001-heart-rate 1.svg'



export function Home(){

    return(
        <Container>
            <Aside>
                <img src={ImageLogo} alt="imagem de logotipo Web Clever" />
                <strong>Relatórios de saúde em gráficos</strong>
                <p>Em poucos segundos, transforme os seus dados de saúde em gráficos de fácil leitura</p>
                <VetorImgWrapper>
                </VetorImgWrapper>
            </Aside>
            <Main>
                <MainWrapper>
                    <ContainerForm>
                        <HeaderForm>
                                
                            <h2>Diário de saúde</h2>
                            <p>Crie o seu relatório diário de saúde</p>
                        </HeaderForm>
                        <ContentForm>
               
                        </ContentForm>
                            <ButtonForm
                                type="submit"
                                form="form-create"
                            >Gerar diário de saúde</ButtonForm>
                    </ContainerForm>
                </MainWrapper>
            </Main>
        </Container>
    )
}
