# Use a specific version of Node.js Alpine image
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/app

# Copy the application files to the working directory
COPY package.json .

# Install musl-utils to provide /bin/sh
RUN apk --no-cache add musl-utils

# Copy the environment file
COPY .env .env

# Set environment variables during build
ARG BASE_URL
ARG API_KEY

ENV BASE_URL ${BASE_URL:-'https://api.weatherapi.com/v1'}
ENV API_KEY $API_KEY

# Install app dependencies
RUN npm install

COPY . .

# Run the build script
RUN npm run build

# Expose the port on which the application will run
EXPOSE 5173

# Specify the command to run the application
CMD ["npm", "run","preview"]

