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
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
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

##🔧 Instalando Dependências

**Instale as dependências do back-end:**
```
cd api
npm install
```
**Instale as dependências da interface web:**
```
cd ../web
npm install
```
