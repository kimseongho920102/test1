# 1. Build React App
FROM node:16 AS react-build
WORKDIR /app
COPY my-app/ .
RUN npm install
RUN npm run build

# 2. Build Spring Boot App
FROM maven:3.8.5-openjdk-17 AS backend-build
WORKDIR /app
COPY backend/ .
COPY --from=react-build /app/build/ src/main/resources/static/
RUN mvn clean package -DskipTests

# 3. Run Application
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=backend-build /app/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
