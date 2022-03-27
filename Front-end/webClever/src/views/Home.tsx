import { useState } from 'react';
import { Input } from "../components/input/Input";
import { ItemsForm } from "../components/itemsForm/ItemsForm";
import ImageLogo from "../assets/images/dark.svg";
import { Aside, ButtonForm, Container, ContainerForm, ContentForm, ContentInputHours, GroupButtonsHoursSelected, HeaderForm, Main, MainWrapper, VetorImgWrapper } from '../styles/Home';
import {ContentMetric, InputMetrics} from '../components/CardMetrics/styles'
import ImgBpm from '../assets/images/001-heart-rate 1.svg'
import ImgPressure from '../assets/images/pressao-arterial.svg'
import { api } from "../services/api";
import { ButtonSelectedHours } from "../components/Button/styles";
import { Formik, Form, Field } from 'formik';
import { boolean } from "yup";



export function Home(){
    const [divShow, setdivShow] = useState(false)

   /*
    
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
*/
    const ItemsHours: string[] = ['02:00:00','06:00:00','10:00:00','14:00:00','20:00:00','22:00:00'];
    console.log(divShow)

    

    
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
                            <Formik
                                    onSubmit={(values, actions) => {
                                        console.log('SUBMIT:', values);
                                        actions.setSubmitting(false); 
                                    }}
            
                                    initialValues={{
                                        name: '',
                                        birthDate: '',
                                        measurementDate: '',
                                        bpm: '',
                                        ItemsHours: ItemsHours,
                                        pressureDiastolic: '',
                                        pressureSystolic: ''
                                    }}
                                    >
                            
                                
                                {props => (<Form id="form-create" onSubmit={props.handleSubmit}>
                                <ItemsForm name={'Nome completo'} />
                                    <Field 
                                        component={Input}
                                        type="text"
                                        name="name"
                                        id="name"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.name}
                                    />
                                <ItemsForm 
                                    name={'Data de nascimento'}/>
                                    <Field 
                                        component={Input}
                                        type="date"
                                        name="birthDate"
                                        id="birthDate"
                                        placeholder="dd/mm/aaaa"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.birthDate}
                                    />
                                <ItemsForm
                                    isBoldTitle
                                    /* Inserir aqui uma função para habilitar as outras opções do form com animação fade-in*/
                                    name={'Para qual dia você deseja gerar o gráfico de saúde?'}/>
                                    <Field 
                                        component={Input}
                                        type="date"
                                        id="measurementDate"
                                        name="measurementDate"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        onClick={()=> setdivShow(true)}
                                        value={props.values.measurementDate}            
                                        placeholder="dd/mm/aaaa"
                                    />
                                { divShow && <ContentInputHours>
                                <ItemsForm
                                    isBoldTitle
                                    name={"Selecione a hora para preencher os dados"}
                                
                                />
                                <GroupButtonsHoursSelected 
                                /* Realizar animação ao cliclar no butão de hora e só habilitar o botão do form quando todos estiverem preenchidos*/
                                >
                                    {ItemsHours.map((item,index)=>{
                                        return  <ButtonSelectedHours key={index}
                                                    isActive
                                                    type="button"
                                                    name="ItemsHours"
                                                    id="ItemsHours"
                                                    onClick={()=>{console.log(index)}}
                                        > {item.replace(':00', '')}</ButtonSelectedHours>
                                    })}
                                   
                                </GroupButtonsHoursSelected>
                                </ContentInputHours>}
                                <ContentMetric>
                                    <div><span> <img src={ImgBpm} alt="Ícone referenciando batimentos cardíacos por minuto" /></span>BPM</div>
                                    <Field 
                                        component={InputMetrics}
                                        name="bpm"
                                        id="bpm"
                                        type="number"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.bpm}
                                />
                                </ContentMetric>
                                <ContentMetric>
                                <div><span> <img src={ImgPressure} alt="Ícone referenciando pressão arterial" /></span>PRESSÃO ARTERIAL</div>
                                    <Field 
                                        component={InputMetrics}
                                        name="pressureDiastolic"
                                        id="pressureDiastolic"
                                        type="number"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.pressureDiastolic}
                                    />
                                    <Field 
                                        component={InputMetrics}
                                        name="pressureSystolic"
                                        id="pressureSystolic"
                                        type="number"
                                        onChange={props.handleChange}
                                        onBlur={props.handleBlur}
                                        value={props.values.pressureSystolic}
                                        />
                                </ContentMetric>               
                                </Form>)}
                            </Formik>
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
