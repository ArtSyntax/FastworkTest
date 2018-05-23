FROM node:10.1.0

# Set environment.
# ENV API_KEY 4d2dadd776d98dfbf4329831f2a68c49eddbd707

# Copy source.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# Build for production.
RUN npm i
RUN npm run build

# Set the command to start the node server.
CMD npm start

