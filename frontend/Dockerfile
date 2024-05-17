FROM node:18.19.1

WORKDIR /usr/src/app
COPY package.json /usr/src/app

RUN npm install react-hot-loader
RUN npm install --loglevel verbose

CMD ["npm", "start"]