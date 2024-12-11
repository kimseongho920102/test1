# 1. React 빌드 단계
FROM node:16 AS react-build
WORKDIR /app
COPY my-app/ .
RUN npm install && npm run build

# 2. Spring Boot 빌드 및 실행 단계
FROM gradle:7.6-jdk17 AS spring-build
WORKDIR /backend
COPY backend/ .
COPY --from=react-build /app/build ./src/main/resources/static/
RUN ./gradlew clean build

# 3. 실행 단계
FROM openjdk:17-jdk
WORKDIR /app
COPY --from=spring-build /backend/build/libs/*.jar app.jar
CMD ["java", "-jar", "app.jar"]