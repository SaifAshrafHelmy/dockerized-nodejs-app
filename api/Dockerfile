FROM node:latest

RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .


# For desktop app only, expose needed host
EXPOSE 4000


# CMD to specify commands that should be run at runtime when the (container) begins to run
# array of strings (each word is an element)
CMD [ "npm", "run", "dev" ]