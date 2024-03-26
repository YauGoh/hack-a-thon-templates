FROM node:21-alpine AS build

WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.25.4

EXPOSE 80
WORKDIR /usr/share/nginx/html
COPY --from=build /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]