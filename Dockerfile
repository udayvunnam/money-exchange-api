FROM node:10-alpine

ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV

# Set a working directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY dist ./dist

EXPOSE 8080

CMD ["node", "dist/server.js"]
