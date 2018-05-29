FROM node:10.1.0

# Copy source.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# Build for production.
RUN npm i
RUN npm run build

# Set the command to start the node server.
CMD npm start

