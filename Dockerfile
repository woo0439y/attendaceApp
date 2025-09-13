# Dockerfile for attendance app
FROM node:18-slim

WORKDIR /app

# Install minimal build deps for sqlite3 compile (if needed)
RUN apt-get update && apt-get install -y python3 make g++ \
  && rm -rf /var/lib/apt/lists/*

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy app source
COPY . .

# Ensure data directory exists and owned by node user
RUN mkdir -p /app/data && chown -R node:node /app/data

ENV PORT=3000
EXPOSE 3000

USER node

CMD ["node", "backend.js"]
