FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Build the application
RUN npm run build

EXPOSE 5173

# Command to run development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
