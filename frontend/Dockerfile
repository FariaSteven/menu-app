# Estágio de construção
FROM node:14 as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Estágio de produção
FROM nginx:1.21

# Copia os arquivos de build do estágio de construção para o diretório do servidor NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Remove a configuração padrão do NGINX
RUN rm /etc/nginx/conf.d/default.conf

# Adiciona o arquivo de configuração personalizado do NGINX
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o NGINX
CMD ["nginx", "-g", "daemon off;"]
