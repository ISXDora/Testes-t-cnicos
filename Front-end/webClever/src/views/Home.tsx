import { Input } from "../components/Input";
import { ItemsForm } from "../components/ItemsForm";
import ImageLogo from "../assets/images/dark.svg"
import ImageHealth from "../assets/images/image 5.svg"

export function Home(){
    return(
        <div>
            <aside>
                <div className="logo">
                    <img src={ImageLogo} alt="imagem de logotipo Web Clever" />
                </div>
                <strong>Relatórios de saúde em gráficos</strong>
                <p>Em poucos segundos, transforme os seus dados de saúde em gráficos de fácil leitura</p>
                <img src={ImageHealth} alt="Imagem de vetor que mostra uma atleta" />
            </aside>
            <main>
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
            </main>
        </div>
    )
}