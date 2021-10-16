FROM node:14.5.0-alpine
ENV NODE_ENV=production

WORKDIR /app
COPY package.json /app
COPY . /app

ARG testdbpassword
ENV testdbpassword=$testdbpassword
RUN npm install
EXPOSE 8080 
ENV NODE_ENV=whatEver

CMD ["npm", "start"]