#!/bin/bash

echo "Running yarn install"
yarn install

echo "Running Docker Compose"
docker compose up -d

echo "Done!"
