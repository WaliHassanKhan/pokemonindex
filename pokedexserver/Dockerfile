FROM node:15.4

WORKDIR /my-app
COPY package.json .
RUN npm install
COPY . .
CMD npm run start:dev