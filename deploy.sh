#!/bin/bash

# 1. React 빌드 및 파일 복사
cd ~/test1/my-app
npm install
npm run build
cp -r build/* ../backend/src/main/resources/static/

# 2. Spring Boot 빌드 및 시스템 서비스 재시작
cd ~/test1/backend
./gradlew clean build --refresh-dependencies

# 서비스 재시작
sudo systemctl restart backend

echo "Deployment completed!"
