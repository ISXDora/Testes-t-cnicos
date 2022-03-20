import { Input } from "../components/input/Input";
import { ItemsForm } from "../components/itemsForm/ItemsForm"
import ImageLogo from "../assets/images/dark.svg"
import { Aside, ButtonForm, Container, ContainerForm, ContentForm, HeaderForm, Main, MainWrapper, VetorImgWrapper } from '../styles/Home'


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
                            <form action="">
                                <ItemsForm 
                                    name={'Nome completo'}
                                    />
                                    <Input 
                                        type="text"
                                        value=""
                                    />
                                <ItemsForm 
                                    name={'Data de nascimento'}/>
                                    <Input
                                    type="date"
                                    value=""
                                    placeholder="dd/mm/aaaa"/>
                                <ItemsForm
                                    isBoldTitle
                                    name={'Para qual dia você deseja gerar o gráfico de saúde?'}/>
                                    <Input 
                                    type="date"
                                    value=""
                                    placeholder="dd/mm/aaaa"/>
                            </form>
                            <ButtonForm
                                disabled
                            >Gerar diário de saúde</ButtonForm>
                        </ContentForm>
                    </ContainerForm>
                </MainWrapper>
            </Main>
        </Container>
    )
}