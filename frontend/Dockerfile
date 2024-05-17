# Usar una imagen base oficial de Node.js
FROM node:18.19.1

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar los archivos de package.json y package-lock.json
COPY package.json /usr/src/app

# Instalar las dependencias del proyecto
RUN npm install --loglevel verbose

# Copiar el resto del código de la aplicación
# COPY . .

# Exponer el puerto en el que la aplicación correrá
EXPOSE 3000

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "run", "start"]
