import { useState, FormEvent } from "react";
import { Container, ContentMetric, InputMetrics } from "./styles";

import ImgBpm from '../../assets/images/001-heart-rate 1.svg'
import ImgPressure from '../../assets/images/pressao-arterial.svg'

type HealthMetricsProps = {
        pressureDiastolic: string;
        pressureSystolic: string;
        bmp: string;
}
export function CardMetricsCreate(props: HealthMetricsProps){

    const [pressureDiastolic, setPressureDiastolic] = useState(Number)
    const [pressureSystolic, setPressureSystolic] = useState(Number)
    const [bpm, setBpm] = useState(Number)

    function handleCreateNewMetrics(event: FormEvent){
        event.preventDefault()
    }

    /*const dataMeasurement = {
        "02:00" : [diastolic, systolic, bpm],
        "06:00" : [diastolic, systolic, bpm],
        "10:00" : [diastolic, systolic, bpm],
        "14:00" : [diastolic, systolic, bpm],
        "18:00" : [diastolic, systolic, bpm],
        "22:00" : [diastolic, systolic, bpm] 
   } */
    return (
        <Container>
            <form onSubmit={handleCreateNewMetrics}>
                <ContentMetric>
                    <div><span> <img src={ImgBpm} alt="Ícone referenciando batimentos cardíacos por minuto" /></span>BPM</div>
                    <InputMetrics
                        value={bpm}
                        onChange={event => setBpm(Number(event.target.value))}
                   />
                </ContentMetric>
                <ContentMetric>
                    <div><span> <img src={ImgPressure} alt="Ícone referenciando pressão arterial" /></span>PRESSÃO ARTERIAL</div>
                    <InputMetrics
                        value={pressureDiastolic}
                        onChange={event => setPressureDiastolic(Number(event.target.value))}
                    />
                    <InputMetrics
                        value={pressureSystolic}
                        onChange={event => setPressureSystolic(Number(event.target.value))}
                    />
                </ContentMetric>  
            </form>
        </Container>
    )
}