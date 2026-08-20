# Imagen oficial ligera de Node.js
FROM node:18-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar dependencias e instalarlas
COPY package*.json ./
RUN npm install --production

# Copiar todos los archivos del proyecto
COPY . .

# Exponer puerto
EXPOSE 8080

# Iniciar servidor
CMD [npm, start]
