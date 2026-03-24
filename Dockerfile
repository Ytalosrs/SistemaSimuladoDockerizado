# Base image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Install dependencies (will be overridden by volume in dev, but useful for prod/build)
COPY package*.json ./
# Check if package.json exists before installing, otherwise skip (handled in compose for dev)
RUN if [ -f package.json ]; then npm install; fi

# Copy source
COPY . .

# Expose port
EXPOSE 3000

# Command
CMD ["npm", "run", "dev"]
