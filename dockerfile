FROM node:18-alpine

WORKDIR /client

COPY package*.json ./

RUN npm i 
# or instalacion ligera
# RUN npm ci --only=production

COPY . .

# RUN npm run build

EXPOSE 5173

CMD [ "npm","run", "dev" ]

# No es necesario definir un CMD ya que la imagen de Nginx se encarga automáticamente de servir el contenido estático
