# 🤝 Contribuindo para o Projeto

Obrigado por querer contribuir! Este guia explica como você pode colaborar no desenvolvimento do projeto.

---

## 📖 Descrição do Projeto

Este é um sistema para gerenciar uma biblioteca, incluindo CRUD de livros e usuários, registro de empréstimos e devoluções, além de relatórios básicos. O projeto é composto por:

- **Back-end:** Uma API RESTful desenvolvida em Node.js com Express.
- **Front-end:** Interface web em HTML/CSS.
- **Conteinerização:** Uso de Docker para gerenciar os serviços.


## 📥 Como Baixar o Repositório

Siga estas etapas para configurar o projeto localmente:

1. **Clone o repositório:**
```
   git clone https://github.com/wennysantana/LibraryApi
```
2. **Navegue até o diretório do projeto:**
```
cd nome-do-repositorio
```
3. **Instale as dependências do back-end:**
```
cd api
npm install
```
4. **Inicie os contêineres Docker:**
```
docker-compose up
```
**Agora você pode acessar o projeto.**

## 🚀 Pré-requisitos
Certifique-se de ter instalado as seguintes ferramentas:

**Git: Controle de versão.**
**Node.js: Execução do back-end.**
**Docker: Gerenciamento de contêineres.**

## 🛠️ Como Contribuir
Siga os passos abaixo para colaborar:

**1. Faça um fork do repositório:**
```
Clique no botão "Fork" no canto superior direito da página do repositório no GitHub.
```
**2. Clone o fork para sua máquina local:**
```
git clone https://github.com/seu-usuario/nome-do-fork.git
```
**3. Crie um branch para a sua funcionalidade:**
```
git checkout -b minha-nova-funcionalidade
```
**4. Faça as alterações no código.**

**5. Adicione os arquivos modificados ao stage:**
```
git add .
```
**6. Faça um commit com uma mensagem clara sobre sua mudança:**
```
git commit -m "Adiciona nova funcionalidade X"
```
**7. Envie suas alterações para o fork:**
```
git push origin minha-nova-funcionalidade
```
**8. Abra um Pull Request (PR):**

- Vá até o repositório original no GitHub.
- Clique em "Pull Requests" e depois em "New Pull Request".
- Compare o branch principal com o branch do seu fork e envie.

## ⚠️ Regras para Contribuições
Mantenha a consistência do código seguindo o estilo já adotado no projeto.
Sempre descreva claramente as alterações feitas no Pull Request.
Evite incluir alterações irrelevantes ou não relacionadas ao problema/funcionalidade abordada.
Se tiver dúvidas ou precisar de ajuda, abra uma issue no repositório!

**Obrigado por colaborar! 🙌**
