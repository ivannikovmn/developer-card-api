FROM node:24.16.0
WORKDIR /usr/local/app

# Install the application dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy the application source
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "run", "start:prod"]