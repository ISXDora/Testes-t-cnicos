import { Input } from "../components/Input";
import { ItemsForm } from "../components/ItemsForm";



export function Home(){
    return(
        <div>
            <aside>
                <div className="logo">
                    <img src="" alt="" />
                </div>
                <strong>Relatórios de saúde em gráficos</strong>
                <p>Em poucos segundos, transforme os seus dados de saúde em gráficos de fácil leitura</p>
                <img src="" alt="" />
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