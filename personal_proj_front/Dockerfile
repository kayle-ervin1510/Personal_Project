FROM node:22-alpine AS build

WORKDIR /app

ENV CYPRESS_INSTALL_BINARY=0

COPY package*json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html