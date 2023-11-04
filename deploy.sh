#!bin/bash
set -e

# Clean old files
rm -rf $target_folder/*

# Copy new files to target folder
cp -r * $target_folder

# Build CSS
cd $target_folder
npm i
npm run build-css