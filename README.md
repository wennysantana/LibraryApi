# Biblioteca API e Interface Web

![Logo do Projeto](link-da-imagem-da-logo-aqui) 

## 📚 Descrição do Projeto

Este projeto é uma API RESTful integrada a uma interface web para gerenciar livros em uma biblioteca. O sistema oferece funcionalidades completas para **controle de usuários**, **gestão de livros** e **empréstimos**, além de relatórios úteis para auxiliar na administração da biblioteca.

### 🎯 Funcionalidades Principais

- **Gerenciamento de Livros (CRUD):**
  - Campos: título, autor, gênero e ano de publicação.
- **Gerenciamento de Usuários (CRUD):**
  - Campos: nome, endereço, e-mail e telefone.
- **Controle de Empréstimos e Devoluções:**
  - Registro de empréstimos e devoluções.
  - Limite de livros emprestados por usuário.
  - Controle de datas de devolução.
- **Relatórios Básicos:**
  - Livros mais emprestados.
  - Lista de usuários com empréstimos pendentes.
- **Conteinerização:**
  - A API e a interface web são executadas em contêineres Docker.

## 🛠️ Como Baixar o Repositório

**1. Clone o repositório para sua máquina:**
```
   git clone https://github.com/wennysantana/LibraryApi
```
**2. Navegue até a pasta do projeto:**
```
cd nome-do-repositorio
```
**3. Configure as dependências e o ambiente conforme descrito na seção Pré-requisitos.**

## 🛠️ Pré-requisitos

**Certifique-se de ter as seguintes ferramentas instaladas:**

- **Docker para criar e gerenciar contêineres.**
- **Node.js para executar o back-end.**
- **npm ou yarn para gerenciar pacotes.**

## 🔧 Instalando Dependências

**Instale as dependências do back-end:**
```
cd api
npm install
```
**Instale as dependências da interface web:**

## ▶️ Executando o Projeto
**Inicie os contêineres usando o Docker Compose:**
```
docker-compose up
```
**Acesse a interface web no navegador:**
```
http://localhost:3000
```
**Use as rotas da API no endpoint:**
```
http://localhost:5000/api
```
## 🤝 Contribuindo
**Contribuições são bem-vindas! Para contribuir, siga estas etapas:**

**1.Faça um fork do projeto:**
```
git fork https://github.com/seu-usuario/nome-do-repositorio.git
```
**2.Crie um branch para sua funcionalidade:**
```
git checkout -b minha-nova-funcionalidade
```
**3.Faça um commit das suas alterações:**
```
git commit -m "Adicionei nova funcionalidade"
```
**4.Envie para o branch principal:**
```
git push origin minha-nova-funcionalidade
```
**5.Abra um pull request na página do repositório.**

## 📸 Imagens do Projeto
**Tela Principal da Interface Web**

**Cadastro de Livros**

**Gerenciamento de Usuários**

**Relatório de Livros Mais Emprestados**

**Controle de Empréstimos Pendentes**

## 👩‍💻 Autores

- **[André Luis Cavalcanti](https://github.com/andrelca)**  
  *Responsável pela documentação.*
- **[Daniel Aretakis](https://github.com/DanielAretakis)**  
  *Desenvolvedor Front-end e responsável pela interface web.*
- **[Lucas José](https://github.com/LucasJLM)**  
  *Scrum master do projeto*
- **[Rafael Hilário](https://github.com/RafaelHilario)**  
  *Desenvolvedor Back-end e responsável pela API.*
- **[Wenny Santana](https://github.com/wennysantana)**  
  *Responsável pela configuração do ambiente no Github*

## 📜 Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
