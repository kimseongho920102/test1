#!/bin/bash

cd ~/test1/my-app

npm run build
cp -r build/* ../backend/src/main/resources/static/

# 2. Spring Boot 빌드 및 시스템 서비스 재시작
cd ~/test1/backend
./gradlew clean build --refresh-dependencies

# 서비스 중지
sudo systemctl stop backend.service

echo "Deployment completed!"

# 서비스 시작
sudo systemctl start backend.service