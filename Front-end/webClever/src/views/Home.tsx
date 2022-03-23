import { FormEvent, useContext, useEffect, useState } from "react";
import { Input } from "../components/input/Input";
import { ItemsForm } from "../components/itemsForm/ItemsForm";
import ImageLogo from "../assets/images/dark.svg";
import { Aside, ButtonForm, Container, ContainerForm, ContentForm, GroupButtonsHoursSelected, HeaderForm, Main, MainWrapper, VetorImgWrapper } from '../styles/Home';
import { api } from "../services/api";
import { ButtonSelectedHours } from "../components/Button/styles";
import { CardMetricsCreate } from "../components/CardMetrics/CardMetricsCreate";
import { date } from "../Lib/utils";
import { HealthMetricsContext } from "../HealthMetricsContext";


export function Home(){
    const data = useContext(HealthMetricsContext)
    console.log(data)

    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [measurementDate, setMeasurementDate] = useState('')
    const [healthMetrics, setHealthMetrics] = useState({"bpms":{},"pressureDiastolics":{}, "pressureSystolics":{}})
    
    async function handleCreateNewPacient(event: FormEvent){
        event.preventDefault()
        
        const data = {
            name,
            birthDate
        }
        const response = await api.post('/users', data)
        const userObj = await api.get(`/users/${response.data.id}`)
        const user_id = userObj.data.id
        const health_metrics = {
            user_id,
            measurementDate
        }
        console.log(health_metrics)
        const res= await api.post("/metrics", health_metrics )
        console.log(res.data)

    }

    async function handleCreateHealthMetrics(sevent: FormEvent){
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
                                    name={birthDate}
                                    value=""
                                    onChange={event => setBirthDate(new Intl.DateTimeFormat('pt-BR').format(new Date(event.target.value)))}
                                    />
                                <ItemsForm
                                    isBoldTitle
                                    /* Inserir aqui uma função para habilitar as outras opções do form com animação fade-in*/
                                    name={'Para qual dia você deseja gerar o gráfico de saúde?'}/>
                                    <Input
                                    type="text"
                                    name="measurement"
                                    value={measurementDate}
                                    onClick={() => console.log('inserir animação fade in para abrir o componente seguinte')}
                                    onChange={event => setMeasurementDate(new Intl.DateTimeFormat('pt-BR').format(new Date(event.target.value)))}
                                    placeholder="dd/mm/aaaa"
                                    />
                                <ItemsForm
                                    isBoldTitle
                                    name={"Selecione a hora para preencher os dados"}
                                
                                />
                                <GroupButtonsHoursSelected
                                /* Realizar animação ao cliclar no butão de hora e só habilitar o botão do form quando todos estiverem preenchidos*/
                                > 
                                    <ButtonSelectedHours
                                    >02:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>06:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>10:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>14:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>20:00</ButtonSelectedHours>
                                    <ButtonSelectedHours>22:00</ButtonSelectedHours>
                                </GroupButtonsHoursSelected>           
                                      
                            </form>
                        </ContentForm>
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
