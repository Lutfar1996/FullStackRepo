# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend application code to the container
COPY . .

# Expose the port that the backend app will run on
EXPOSE 5001

# Run the app using Node.js
CMD ["node", "server.js"]
