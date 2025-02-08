#!/bin/bash

set -e

echo "Starting deployment process..."

DEPLOY_DIR="/home/carl/projects/portfolio-website"

cd $DEPLOY_DIR

echo "Pulling latest changes..."
git pull origin main

echo "Install packages"
yarn install

echo "Running Docker Compose"
docker compose up -d

echo "Done!"
