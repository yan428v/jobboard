FROM node:20-alpine3.18

WORKDIR /app
COPY package*.json ./
RUN npm install
#RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm","run","start" ]
