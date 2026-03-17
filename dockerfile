FROM node:24.13.0-alpine AS builder

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.28.2-alpine

WORKDIR /usr/share/nginx/html/

COPY --from=builder /app/dist .

