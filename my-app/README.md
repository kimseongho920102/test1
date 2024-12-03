my-app : front
프론트 개발 순서 빌드 - 배포 - 리액트 기동
npm run build
cp -r build/* ../backend/src/main/resources/static/
npm start

backend : backend
백엔드 개발 순서 클린 빌드 - 스프링 부트 기동
./gradlew clean build --refresh-dependencies
./gradlew bootrun