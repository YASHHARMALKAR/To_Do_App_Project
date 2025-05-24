# Use an official Node.js runtime as a base image
FROM node:18
# Set the working directory inside the container
WORKDIR /app
# Copy the application files
COPY . .
# Install dependencies
RUN npm init -y
RUN npm install
RUN npm install express
# Expose the application port
EXPOSE 8082
# Command to run the application
CMD ["node", "index.js"]
