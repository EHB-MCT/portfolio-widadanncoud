# Docker image is a template with instructions, which is used to create Docker containers
FROM node:latest
WORKDIR /api

#install app depencies
COPY package*.json .
RUN npm install

#Bundle app source
COPY . .
CMD ["npm", "start"] 