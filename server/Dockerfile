FROM node:8
WORKDIR /app
# COPY package.json .
# RUN npm install
COPY . .
RUN npm i -g tape tape-watch tap-spec knex pgtools
