#!/bin/bash

set -e
# 에러 로그 파일 경로 설정
ERROR_LOG=~/test1/deploy_err.log

# 에러 발생 시 로그 파일에 기록하고 종료
trap 'echo "Error occurred. Check $ERROR_LOG for details." >&2; exit 1' ERR

# 모든 출력과 에러를 로그 파일에 기록
exec 2> >(tee -a "$ERROR_LOG")  # 표준 에러를 로그 파일에 기록

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