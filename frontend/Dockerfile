FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Build arguments
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

# Build the application
RUN npm run build

EXPOSE 5173

# Command to run development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
