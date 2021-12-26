FROM node:13.12.0-alpine

WORKDIR /todo-app-frontend

ENV PATH /todo-app-frontend/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm i

COPY . ./

CMD ["npm", "start"]


