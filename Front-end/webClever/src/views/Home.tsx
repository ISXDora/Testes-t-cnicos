import { FormEvent, useState } from "react";
import { Input } from "../components/input/Input";
import { ItemsForm } from "../components/itemsForm/ItemsForm"
import ImageLogo from "../assets/images/dark.svg"
import { Aside, ButtonForm, Container, ContainerForm, ContentForm, HeaderForm, Main, MainWrapper, VetorImgWrapper } from '../styles/Home'
import { date } from "../Lib/utils";


export function Home(){

    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [checkDay, setCheckDay] = useState('')

    function handleCreateNewPacient(event: FormEvent){
        event.preventDefault()

        console.log(
            name, birthDate, checkDay)
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
                                    type="date"
                                    value={birthDate}
                                    onChange={event => setBirthDate(event.target.value)}
                                    placeholder="dd/mm/aaaa"/>
                                <ItemsForm
                                    isBoldTitle
                                    name={'Para qual dia você deseja gerar o gráfico de saúde?'}/>
                                    <Input 
                                    type="date"
                                    value={checkDay}
                                    onChange={event => setCheckDay(event.target.value)}
                                    placeholder="dd/mm/aaaa"
                                    onClick={ () => {}}/>
                            </form>
                            <ButtonForm
                                form="form-create"
                                onSubmit={handleCreateNewPacient}
                            >Gerar diário de saúde</ButtonForm>
                        </ContentForm>
                    </ContainerForm>
                </MainWrapper>
            </Main>
        </Container>
    )
}