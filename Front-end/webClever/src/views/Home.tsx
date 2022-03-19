import { Input } from "../components/Input";
import { ItemsForm } from "../components/ItemsForm";
import ImageLogo from "../assets/images/dark.svg"
import { Aside, Container, Main, VetorImgWrapper } from '../styles/Home'

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
                <div>
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
                            type={"date"}
                            value=""/>
                        <ItemsForm 
                            name={'Para qual dia você deseja gerar o gráfico de saúde?'}/>
                            <Input 
                            type={"date"}
                            value=""/>
                    </form>
                    <button>Gerar diário de saúde</button>
                </div>
            </Main>
        </Container>
    )
}