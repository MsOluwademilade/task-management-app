# Use Node base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Expose Angular dev port
EXPOSE 4200

# Start dev server
CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]

