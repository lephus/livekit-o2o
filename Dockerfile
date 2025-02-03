# Use an official Node.js runtime as the base image
FROM node:20.11.0-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json /app

RUN yarn install

COPY . /app

EXPOSE 9993

RUN yarn run build

CMD ["yarn", "start"]
