# # React 빌드 단계
# FROM node:16 AS react-build
# WORKDIR /app
# COPY my-app/ .
# RUN npm install
# RUN npm run build
# RUN echo "React build files:" && ls -al /app/build

# # Spring Boot 빌드 단계
# FROM gradle:7.6-jdk17 AS spring-build
# WORKDIR /app
# COPY backend/ .
# COPY --from=react-build /app/build /app/src/main/resources/static/
# RUN gradle build
# RUN echo "Spring Boot static files:" && ls -al /app/src/main/resources/static

# # 최종 실행 단계
# FROM openjdk:17-jdk-slim
# WORKDIR /app
# RUN mkdir -p /app/libs
# COPY --from=spring-build /app/build/libs/*.jar /app/libs/
# RUN echo "JAR files in /app/libs:" && ls -al /app/libs/
# ENTRYPOINT ["java", "-jar", "/app/libs/app.jar"]
