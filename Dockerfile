FROM node:12-slim

WORKDIR /usr/src/app

ENV PORT 8080

COPY package*.json ./

# RUN npm i firebase firebase-tools -g
RUN npm install --only=production

COPY . ./

RUN npm run build

# Start the service
CMD [ "npm", "start" ]