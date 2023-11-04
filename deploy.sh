#!bin/bash
set -e

# Clean old files
sudo rm -rf $target_folder/*

# Copy new files to target folder
sudo cp -r * $target_folder

# Build CSS
cd $target_folder
sudo npm i
npm run build-css