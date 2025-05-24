# Use an official Node.js runtime as a base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files from local folder to container
COPY . .

# Install dependencies
RUN npm init -y
RUN npm install express

# Expose the port the app runs on
EXPOSE 3000

# Run server.js directly (it's in the current /app folder inside the container)
CMD ["node", "server.js"]
