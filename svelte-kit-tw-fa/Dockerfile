FROM node:21-alpine as base
EXPOSE 80

FROM base as build

WORKDIR /app

COPY . .

RUN npm ci

RUN npm run build

FROM base
ENV PORT=80

WORKDIR /app

COPY --from=build /app/build /app/package.json /app/package-lock.json ./

RUN npm ci --omit dev

ENTRYPOINT [ "node", "index.js" ]