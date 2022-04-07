import { Chart } from "react-google-charts";
import { useState, useCallback, useEffect } from 'react';
import {useUser} from '../contexts/user'
import { Aside, ButtonForm, Container, ContainerForm, ContentForm, ContentInputHours, GroupButtonsHoursSelected, HeaderForm, Main, MainWrapper, VetorImgWrapper } from '../styles/Home';
import ImageLogo from "../assets/images/dark.svg";
import { useSearchParams } from 'react-router-dom';
import { UserData } from "../entities/entities";




export function Graphics(){
    const {listUserMetrics, user} = useUser() 
    const [metrics, setMetrics] = useState<UserData[]>()
    const [diastolicData, setDiastolicData] = useState([])
    const [data, setData] = useState(
         [
            ["Hour", "Diastolic", "Systolic"],
            ["", 0, 0],
          ]
    )
    const [searchParams] = useSearchParams();



     
      
     const options = {
        title: "Pressão",
        curveType: "function",
        legend: { position: "bottom" },
      };

    
    
    useEffect(()=>{
        const listMetrics = async ()=> {
           
                const userId = searchParams.get('id')
                if(userId){

                    const result = await listUserMetrics(userId)
                    //setMetrics(result)

                    const diastolicResult = result[0].health_Metrics[0].diastolics_pressure
                    const systolicResult = result[0].health_Metrics[0].systolics_pressure

                    const dataTemp = [
                        ["Hour", "Diastolic", "Systolic"],
                        ["", 0, 0],
                      ];

                    
                    for (const diastolic of diastolicResult) {
                        const hour = diastolic.hour
                        let systolicValue = 0
                        const diastolicValue = diastolic.value
                        for (const systolic of systolicResult) {
                            if(hour===systolic.hour){
                                systolicValue = systolic.value
                            }                           
                        }
                        dataTemp.push([hour, diastolicValue, systolicValue])
                    }
                    setData(dataTemp)
                   
                }
                
            
        }
        listMetrics()
    },[])

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
                                
                            <h2>Gráficos de saúde</h2>

                        </HeaderForm>
                        <ContentForm>
                    

                            <Chart
                                chartType="Line"
                                width="100%"
                                height="400px"
                                data={data}
                                options={options}
                            />
                                            
                        </ContentForm>
                    </ContainerForm>
                </MainWrapper>
            </Main>
        </Container>
    )
}
