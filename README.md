# Desafio Everymind 💻

``` Escopo backend:```

Criação de CRUD's:

📌  CRUD para Produtos


## 📋 Pré-requisitos

📌 Criação de CRUD's
📌 Popular o banco de dados
📌 Swagger

-----------------------------------------------------------------

## ⏯ Inicializando o Sistema

#### npm i ou yarn add
###### Instalar as dependências do projeto 
###### __________________________________________________________________________________
#### npm i -g @nestjs/cli
###### Caso não tenha o nest instalado globalmente
###### __________________________________________________________________________________
#### npm install --save @nestjs/swagger swagger-ui-express
###### Instalar as dependências do Swagger
###### __________________________________________________________________________________
#### npm run start:dev
###### Execução do backend
###### __________________________________________________________________________________
#### npx prisma studio
###### Visualização do banco de maneira dinâmica
###### __________________________________________________________________________________
#### npx prisma db seed
###### Popular o banco de dados

-----------------------------------------------------------------

## ✅    Swagger

Acesse: http://localhost:8000/

-----------------------------------------------------------------


### 📋 CRUD Produtos

```1. Get Produto By Id ``` <br/>

Este método retorna um produto pelo seu ID.

```2. Get all Produtos ``` <br/>

Este método retorna uma lista com todos os produtos cadastrados.

```3. Get Produto By código``` <br/>

Este método retorna um produto através do seu código.

```4. Get Produto By nome``` <br/>

Este método retorna um produto através do seu nome.

```5. Post Produto``` <br/>

Este método realiza o cadastro de um novo produto.

```6. Patch Produto``` <br/>

Este método possibilita a edição de um produto, levando como parâmetro o Id cadastrado no sistema.

```7. Delete Produto``` <br/>

Este método possibilita deletar o cadastro de um produto.

-----------------------------------------------------------------

``` Escopo frontend:```

## ⏯ Inicializando o Sistema

### Inicie primeiro o backend, em seguida execute o frontend

#### npm i ou yarn add
###### Instalar as dependências do projeto 
###### __________________________________________________________________________________
#### npm install -g react-devtools
###### Caso não tenha o react instalado globalmente
###### __________________________________________________________________________________
#### npm run start:dev
###### Execução do frontend
###### __________________________________________________________________________________

-----------------------------------------------------------------

### 📋 Telas Produtos

```1. Tela todos os produtos``` <br/>

Essa tela contém a listagem de todos os produtos, podendo filtrar pelo nome, também há ícone com opção para edição ou remoção do devido item.

```2. Tela Cadastro ``` <br/>

Essa tela contém o formulário para cadastro dos produtos.

```3. Tela produtos por código``` <br/>

Essa tela contém a listagem de todos os produtos, podendo filtrar pelo código, também há ícone com opção para edição ou remoção do devido item.

```4. Tela de edição``` <br/>

Essa tela contém o formulário para edição dos produtos.

-----------------------------------------------------------------

## 🖥️ Tecnologias

IDE: Visual Studio Code

TypeScript <br/>
NodeJS <br/>
Prisma <br/>
NestJS <br/>
Swagger <br/>
PostgreSQL <br/>
ReactJS
