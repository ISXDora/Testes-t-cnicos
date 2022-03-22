import { FormEvent, useEffect, useState } from "react";
import { Input } from "../components/input/Input";
import { ItemsForm } from "../components/itemsForm/ItemsForm";
import ImageLogo from "../assets/images/dark.svg";
import { Aside, ButtonForm, Container, ContainerForm, ContentForm, GroupButtonsHoursSelected, HeaderForm, Main, MainWrapper, VetorImgWrapper } from '../styles/Home';
import { api } from "../services/api";
import { ButtonSelectedHours } from "../components/Button/styles";



export function Home(){

    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [bpm, setBpm] = useState(Number)
    const [diastolic, setDiastolic] = useState(Number)
    const [systolic, setSystolic] = useState(Number)
    const [measurement, setMeasurement] = useState('')


    useEffect(() => {
        api.get('users')
            .then(response => console.log(response.data))
    }, [])

    function handleCreateNewPacient(event: FormEvent){
        event.preventDefault()

        const data = {
            name,
            birthDate,
            measurement
        }
        
        api.post('/users', data)
            .then(response => console.log(response.data))
    }
    const dataMeasurement = {
         "02:00" : [diastolic, systolic, bpm],
         "06:00" : [diastolic, systolic, bpm],
         "10:00" : [diastolic, systolic, bpm],
         "14:00" : [diastolic, systolic, bpm],
         "18:00" : [diastolic, systolic, bpm],
         "22:00" : [diastolic, systolic, bpm]
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
                                    placeholder="dd/mm/aaaa"/>
                                <ItemsForm
                                    isBoldTitle
                                    name={"Selecione a hora para preencher os dados"}
                                
                                />
                                <GroupButtonsHoursSelected>
                                    <ButtonSelectedHours>02:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>06:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>10:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>14:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>20:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>22:00</ButtonSelectedHours>
                                </GroupButtonsHoursSelected>
                            </form>
                        </ContentForm>
                            <ButtonForm
                          /* retirar para testar */ {...console.log('Comentar para testar form')}
                                form="form-create"
                                onSubmit={handleCreateNewPacient}
                            >Gerar diário de saúde</ButtonForm>
                    </ContainerForm>
                </MainWrapper>
            </Main>
        </Container>
    )
}
