import { useState, useCallback, useEffect } from 'react';
import {useUser} from '../contexts/user'
import { Aside, ButtonForm, Container, ContainerForm, ContentForm, ContentInputHours, GroupButtonsHoursSelected, HeaderForm, Main, MainWrapper, VetorImgWrapper } from '../styles/Home';
import {ContentMetric, InputMetrics, ContainerMetrics} from '../components/CardMetrics/styles'
import { useForm, SubmitHandler} from "react-hook-form";
import { Input } from "../components/input/Input";
import { ButtonSelectedHours } from "../components/Button/styles";
import { ItemsForm } from "../components/itemsForm/ItemsForm";
import ImageLogo from "../assets/images/dark.svg";
import ImgPressure from '../assets/images/pressao-arterial.svg'
import ImgBpm from '../assets/images/001-heart-rate 1.svg'
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';


type Inputs ={
    name: string;
    birthDate: string;
    measurementDate: string;
    bpm: string;
    pressureDiastolic: string;
    pressureSystolic: string;
}
type Metric = {
    bpm: string;
    pressureDiastolic: string;
    pressureSystolic: string;
}
type User = {
    name: string;
    birthDate: string;
    measurementDate: string;
    metricsMap: Map<string, Metric>
}

export function Home(){
    const [divShow, setdivShow] = useState(false);
    const [selectedTime, setSelectedTime] = useState('') 
    const [metricsMapState, setMetricsMapState] =  useState<Map<string, Metric>>(new Map<string, Metric>())
    const {create, user} = useUser() 


    let navigate = useNavigate();
    

    

   
    const {  register, handleSubmit, getValues, setValue, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) =>{
        createUser(data)
    };
    const onCreateMetricsSubmit: SubmitHandler<Inputs> = metrics => console.log(metrics);

    
    useEffect(()=>{
        const metricsMap = new Map<string, Metric>()
        metricsMap.set("02:00",{bpm:'',pressureDiastolic:'',pressureSystolic:''})
        metricsMap.set("06:00",{bpm:'',pressureDiastolic:'',pressureSystolic:''})
        metricsMap.set("10:00",{bpm:'',pressureDiastolic:'',pressureSystolic:''})
        metricsMap.set("14:00",{bpm:'',pressureDiastolic:'',pressureSystolic:''})
        metricsMap.set("18:00",{bpm:'',pressureDiastolic:'',pressureSystolic:''})
        metricsMap.set("22:00",{bpm:'',pressureDiastolic:'',pressureSystolic:''})
        setMetricsMapState(metricsMap)
        setSelectedTime("02:00")
    },[])

    const createUser = useCallback(async (data) => { 
            data.metricsMap= metricsMapState; 
            await create(data)
            if(user && user.id){

                let params = {id: user.id};
                navigate({pathname: '/Graphics', search:`?${createSearchParams(params)}`})
            }
        },
        [metricsMapState]
        ) 

    const nextHour = useCallback(
        () => {
            if(metricsMapState !== undefined && metricsMapState.has(selectedTime)){
                const hourKeys = Array.from(metricsMapState.keys())

                const indexHour = hourKeys.indexOf(selectedTime)
                const next = indexHour + 1
                
                const itemHours = metricsMapState.set(selectedTime, {bpm:getValues('bpm'), pressureDiastolic:getValues('pressureDiastolic'), pressureSystolic:getValues('pressureSystolic')})
                
                setSelectedTime(hourKeys[next])
                const nextMetricValue = metricsMapState.get(hourKeys[next])
                if(nextMetricValue !== undefined && (nextMetricValue.bpm != '' || nextMetricValue.pressureDiastolic != '' || nextMetricValue.pressureSystolic != '')){
                    setValue('bpm', nextMetricValue.bpm)
                    setValue('pressureDiastolic', nextMetricValue.pressureDiastolic)
                    setValue('pressureSystolic', nextMetricValue.pressureSystolic)
                }else{
                    setValue('bpm', '')
                    setValue('pressureDiastolic', '')
                    setValue('pressureSystolic', '')
                }
                
                console.log(itemHours)
            }
        },
        [selectedTime]
        ) 
    
    const toBackHour = useCallback(
        () => {
            if(metricsMapState !== undefined && metricsMapState.has(selectedTime)){
                const hourKeys = Array.from(metricsMapState.keys())

                const indexHour = hourKeys.indexOf(selectedTime)
                const back = indexHour - 1
                setSelectedTime(hourKeys[back])
                const metricsBack = metricsMapState.get(hourKeys[back])
                if(metricsBack !== undefined){

                    setValue('bpm', metricsBack.bpm)
                    setValue('pressureDiastolic', metricsBack.pressureDiastolic)
                    setValue('pressureSystolic', metricsBack.pressureSystolic)
                }
            }
        },
        [selectedTime]
    )   

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
                           <form onSubmit={handleSubmit(onSubmit)} id="form-create">
                                <ItemsForm name={'Nome completo'} />
                                    <Input  type="text" {...register("name")}/>
                                <ItemsForm 
                                    name={'Data de nascimento'}/>
                                    <Input type="date"  {...register("birthDate")} placeholder="dd/mm/aaaa" />
                                <ItemsForm
                                    isBoldTitle
                                    /* Inserir aqui uma função para habilitar as outras opções do form com animação fade-in*/
                                    name={'Para qual dia você deseja gerar o gráfico de saúde?'}/>
                                    <Input 
                                        type="date"
                                        id="measurementDate"
                                        {...register("measurementDate")} 
                                        onClick={()=> setdivShow(true)}
                                        placeholder="dd/mm/aaaa"
                                    />


                                {divShow && <ContentInputHours>
                                <ItemsForm
                                    isBoldTitle
                                    name={"Selecione a hora para preencher os dados"}
                                
                                />
                                
                                <GroupButtonsHoursSelected 
                                /* Realizar animação ao cliclar no butão de hora e só habilitar o botão do form quando todos estiverem preenchidos*/
                                >
                                 {
                                     Array.from(metricsMapState.keys()).map((item, index) => {
                                         return(
                                            <ButtonSelectedHours key={index}
											isActive={selectedTime === item}
											type="button"
											name={item}
											value={item}
                                            onClick={() => setSelectedTime(item)}
											/>
                                         )
                                     })
                                 }  
                               
                                </GroupButtonsHoursSelected>
                                </ContentInputHours>}
                                { divShow && <ContainerMetrics>
                                    
                                 <ContentMetric>
                                    <div><span> <img src={ImgBpm} alt="Ícone referenciando batimentos cardíacos por minuto" /></span>BPM</div>
                                    <InputMetrics
                                        id="bpm"
                                        type="number"
                                        {...register("bpm")} 
    
                                />
                                </ContentMetric>
                                <ContentMetric>
                                <div><span> <img src={ImgPressure} alt="Ícone referenciando pressão arterial" /></span>PRESSÃO ARTERIAL</div>
                                    <InputMetrics
                                        
                                        id="pressureDiastolic"
                                        type="number"
                                        {...register("pressureDiastolic")} 
                                    />
                                    <InputMetrics
                                        {...register("pressureSystolic")} 
                                        name="pressureSystolic"
                                        id="pressureSystolic"
                                        type="number"
                                        />
                                </ContentMetric>

                                </ContainerMetrics>}
                                </form>
                                <button
                                    
                                    onClick={toBackHour}
                                >Anterior</button>

                                <button
                                    onClick={nextHour}
                                >Próximo
                                </button>
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
