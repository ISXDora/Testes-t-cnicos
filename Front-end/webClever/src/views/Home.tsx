import { FormEvent, useEffect, useState } from "react";
import { Input } from "../components/input/Input";
import { ItemsForm } from "../components/itemsForm/ItemsForm";
import ImageLogo from "../assets/images/dark.svg";
import { Aside, ButtonForm, Container, ContainerForm, ContentForm, GroupButtonsHoursSelected, HeaderForm, Main, MainWrapper, VetorImgWrapper } from '../styles/Home';
import { api } from "../services/api";
import { ButtonSelectedHours } from "../components/Button/styles";
import { CardMetricsCreate } from "../components/CardMetrics/CardMetricsCreate";


export function Home(){

    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [measurement, setMeasurement] = useState('')


    useEffect(() => {
        api.get('users')
            .then(response => console.log(response.data))
    }, [])

    function handleCreateNewPacient(event: FormEvent){
        event.preventDefault()

        const data = {
            name,
            birthDate
        }
        
        api.post('/users', data)
            .then(response => console.log(response.data))
    }

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
                            <form id="form-create" onSubmit={handleCreateNewPacient}>
                                <ItemsForm 
                                    name={'Nome completo'}
                                    />
                                    <Input 
                                        type="text"
                                        value={name}
                                        onChange={event => setName(event.target.value)}
                                    />
                                <ItemsForm 
                                    name={'Data de nascimento'}/>
                                    <Input
                                    mask='dd/mm/yyyy'
                                    type="text"
                                    name="birthDate"
                                    value={birthDate}
                                    onChange={event => setBirthDate(new Intl.DateTimeFormat('pt-BR').format(new Date(event.target.value)))}
                                    {...console.log("travei aqui, vi que tem uma biblioteca para utilizar, o que me travou mesmo foi não conseguir transformar string para timestamp")}
                                    />
                                <ItemsForm
                                    isBoldTitle
                                    /* Inserir aqui uma função para habilitar as outras opções do form com animação fade-in*/
                                    name={'Para qual dia você deseja gerar o gráfico de saúde?'}/>
                                    <Input
                                    type="text"
                                    name="measurement"
                                    value={measurement}
                                    onChange={event => setMeasurement(new Intl.DateTimeFormat('pt-BR').format(new Date(event.target.value)))}
                                    placeholder="dd/mm/aaaa"
                                    />
                                <ItemsForm
                                    isBoldTitle
                                    name={"Selecione a hora para preencher os dados"}
                                
                                />
                                <GroupButtonsHoursSelected
                                /* Realizar animação ao cliclar no butão de hora e só habilitar o botão do form quando todos estiverem preenchidos*/
                                > 
                                    <ButtonSelectedHours>02:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>06:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>10:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>14:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>20:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>22:00</ButtonSelectedHours>
                                </GroupButtonsHoursSelected>
                            </form>
                        </ContentForm>
                            <CardMetricsCreate                                 
                                bmp=""
                                pressureDiastolic=""
                                pressureSystolic=""></CardMetricsCreate>

                            <ButtonForm
                                form="form-create"
                                onSubmit={handleCreateNewPacient}
                            >Gerar diário de saúde</ButtonForm>
                    </ContainerForm>
                </MainWrapper>
            </Main>
        </Container>
    )
}
