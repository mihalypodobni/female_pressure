# build stage
FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# production stage
#EXPOSE 8080
CMD ["node", "server/server.js"]