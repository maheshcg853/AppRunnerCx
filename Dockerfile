FROM --platform=linux/arm64 node:20

EXPOSE 3000
WORKDIR /server
COPY package.json package-lock.json ./
RUN npm install
COPY . .

ENTRYPOINT ["npm", "start"]