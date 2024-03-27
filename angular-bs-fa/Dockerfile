FROM node:21-alpine as base
EXPOSE 80

FROM base as build

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

FROM base

WORKDIR /app

COPY --from=build /app/dist ./

ENV SSR_PORT=80
ENTRYPOINT [ "node", "./server/server.mjs" ]