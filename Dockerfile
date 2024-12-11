# React 빌드 단계
FROM node:16 AS react-build
WORKDIR /app
RUN ls -al
COPY my-app/ .  # 최상위 디렉토리 기준으로 React 디렉토리 복사
RUN npm install && npm run build

# Spring Boot 빌드 및 실행 단계
FROM gradle:7.6-jdk17 AS spring-build
RUN ls -al
WORKDIR /backend
COPY backend/ .  # 최상위 디렉토리 기준으로 Spring Boot 디렉토리 복사
COPY --from=react-build /app/build ./src/main/resources/static/
RUN ./gradlew clean build

# 실행 단계
FROM openjdk:17-jdk
WORKDIR /app
COPY --from=spring-build /backend/build/libs/*.jar app.jar
CMD ["java", "-jar", "app.jar"]
