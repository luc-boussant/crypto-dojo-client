FROM node:latest
WORKDIR /usr/src
ADD ./package* ./
RUN npm i
