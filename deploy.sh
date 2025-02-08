#!/bin/bash

echo "Installing yarn command"
npm install --global yarn

echo "Running yarn install"
yarn install

echo "Running Docker Compose"
docker compose up -d

echo "Done!"
