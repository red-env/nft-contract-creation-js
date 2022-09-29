FROM node:6

RUN apt install -y python3

WORKDIR /usr/app

RUN npm install -g truffle
COPY package.json .
RUN npm install

COPY . .