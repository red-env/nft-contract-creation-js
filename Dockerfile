FROM node:alpine

RUN apk add --no-cache --virtual .gyp python3 make g++

WORKDIR /usr/app

RUN npm install -g truffle
COPY package.json .
RUN npm install

COPY . .