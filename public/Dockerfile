# Use a stable Node.js base image (non-Alpine to avoid native module issues)
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json for layer caching
COPY package*.json ./

# Optionally set registry (useful in CI/CD environments)
RUN npm config set registry https://registry.npmjs.org

# Install dependencies
RUN npm install --verbose

# Copy the rest of your application files
COPY . .

# Expose the port your app runs on (adjust if needed)
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
