# Teste técnico Web Clever 

O aplicativo Web Clever faz o acompanhamento das métricas de parâmetros de saúde através de gráficos. 

### Tecnologias Utilizadas 

#### Back-end

- Node.js
- Typescript
- Express
- Typeorm

#### Front-end

- React.js
- Typescript

## Instale os arquivos em sua máquina local

[x]Necessário ter o Node.js

[x]Biblioteca pg pra rodar o Postgres no Node.js 

*Clonando o repositório*

`git clone https://github.com/ISXDora/Testes-t-cnicos.git`

**Os projetos estão separados em pastas, a API no diretório Back-end e a aplicação Web em Front-end**

- Será necessário criar um novo banco de dados no Postgres com seu usuário e senha.

- Feito isso, alterar as configurações de acesso ao banco através do arquivo ormconfig.json de acordo com a porta do Postgres em sua máquina, usuário e senha, e o nome que você cadastrou para o banco de dados. 

~~~json
{
    "type": "postgres",
    "host": "localhost",
    "port": 5433,
    "username": "postgres",
    "password": "123456",
    "database": "webCleverApi",
    "entities": ["src/entities/**/*.ts"],
    "migrations": ["src/db/migrations/*.ts"]
}
~~~

- Salvar o arquivo com as informações alteradas e prosseguir para a instalação das dependências.

*Instalando dependências e migrations*

`npm install`

*migrations*

`yarn typeorm migration:run`

*Iniciando Web Clever API Server*

`npm dev` 

ou, caso utilize o yarn.

`yarn dev`

**As rotas da API estão dispostas em um arquivo readme dentro da pasta Back-end**


*Instalando dependências da aplicação Web Clever*

- Entre no diretório Front-end e instale as dependências do projeto:

`npm install`

ou 

`yarn install`

*Iniciando o projeto*

`yarn start`





