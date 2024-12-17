#!/bin/bash

# 1. React 빌드 및 파일 복사
cd ~/my-app                     # React 프로젝트 경로
npm install                     # 의존성 설치 (필요시)
npm run build                   # 빌드 실행
cp -r build/* ../backend/src/main/resources/static/ # 빌드 결과 복사

# 2. Spring Boot 재시작
cd ~/backend                    # Spring Boot 프로젝트 경로
./gradlew clean build --refresh-dependencies # 클린 빌드
pkill -f 'java -jar'            # 기존 Spring Boot 애플리케이션 종료
nohup ./gradlew bootrun &       # 백그라운드에서 Spring Boot 시작

echo "Deployment completed!"
