# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire React application code to the container
COPY . .

# Build the React app for production
RUN npm run build

# Install the 'serve' package to serve the built React app
RUN npm install -g serve

# Expose the port that the React app will run on
EXPOSE 5000

# Serve the app using the 'serve' package
CMD ["serve", "-s", "build", "-l", "5000"]
