FROM node:20-alpine3.18

WORKDIR /app
COPY package*.json ./

COPY prisma/schema.prisma prisma/
RUN npx prisma generate

RUN npm install

COPY . .
RUN npm run build
EXPOSE 3000
CMD [ "npm","run","start" ]
