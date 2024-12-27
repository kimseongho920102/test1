# 1. React 빌드 및 파일 복사
cd /workspace/test1/my-app
npm install
npm run build
cp -r build/* ../backend/src/main/resources/static/

# 2. Spring Boot 빌드 및 시스템 서비스 재시작
cd /workspace/test1/backend
./gradlew clean build --refresh-dependencies

git add .
git commit -m 'push'
git push origin main