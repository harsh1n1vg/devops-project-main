# Use Node base image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy only necessary files for installing dependencies
COPY devops-integration/package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY devops-integration/. .

# Build the React app using Vite
RUN npm run build

# Optional: Use serve to serve the built files
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "80"]
