FROM maven
ENV APP_DIR /usr/src/app
RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR

COPY . $APP_DIR

RUN mvn package
CMD [ "sh", "-c", "java -jar target/gs-spring-boot-docker-0.1.0.jar" ]
