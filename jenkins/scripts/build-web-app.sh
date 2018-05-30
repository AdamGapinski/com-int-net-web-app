#!/usr/bin/env sh

cd web-application
npm install
npm run build
cd ..
mkdir --parent ./src/main/resources/static 2> /dev/null
cp -r ./web-application/build/* ./src/main/resources/static/
