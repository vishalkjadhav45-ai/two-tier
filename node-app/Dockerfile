# Use official Node.js image
FROM node:alpine

# Create app directory
WORKDIR /app
RUN npm init -y
# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm install cors

RUN npm install express

# Copy app source
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
