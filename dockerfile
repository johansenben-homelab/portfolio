FROM node:24-alpine

WORKDIR /app

#copy package.json and package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npx next start"]