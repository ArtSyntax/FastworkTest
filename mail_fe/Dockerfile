FROM node:10.1.0

# Set environment.
ENV NPM_CONFIG_LOGLEVEL warn
# ENV API_KEY 4d2dadd776d98dfbf4329831f2a68c49eddbd707

# Copy all local files into the image.
COPY . .

# Build for production.
RUN npm i
RUN npm run build

# Set the command to start the node server.
RUN npm start

# Tell Docker about the port we'll run on.
EXPOSE 8000

