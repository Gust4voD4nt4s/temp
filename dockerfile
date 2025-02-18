# Etapa de construção
FROM node:20.17.0 AS builder

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos de configuração do projeto
COPY package*.json ./
COPY yarn.lock ./

# Instalar as dependências
RUN yarn install

# Copiar o restante do código da API
COPY . .

# Construir a aplicação
RUN yarn build

# Expor a porta que a API vai usar (por exemplo, 5000)
EXPOSE 3001

# Comando para iniciar a API
CMD ["yarn", "start"]


