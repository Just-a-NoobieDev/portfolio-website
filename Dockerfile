# Stage 1: Build the React app
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies using Yarn (ensuring frozen lockfile)
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN yarn build

# Stage 2: Serve the app using a lightweight Node.js server
FROM node:20-alpine

WORKDIR /app

# Install serve globally to serve static files
RUN yarn global add serve

# Copy the built app from the build stage
COPY --from=build /app/build ./build

# Serve the app on port 3000
CMD ["serve", "-s", "build", "-l", "3000"]

EXPOSE 3000
