# Use uma imagem base
FROM node:18

# Defina o diretório de trabalho
WORKDIR /API

# Copie os arquivos do projeto
COPY . .

# Instale dependências
RUN npm install

# Expor porta
EXPOSE 3000

# Comando padrão para o contêiner
CMD ["npm", "start"]
