# Build stage
FROM maven:3.8.4-openjdk-11 AS build
WORKDIR /app
COPY . .
RUN mvn clean package

# Runtime stage
FROM openjdk:11-jre-slim
WORKDIR /app
COPY --from=build /app/target/*.jar /app/calculator.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "calculator.jar"]