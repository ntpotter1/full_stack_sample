FROM node:boron

ENV APP_DIR /usr/src/app

RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR

ENV NODE_ENV development
ENV SERVER_PORT 3000

RUN node -v
RUN npm -v

COPY . $APP_DIR
RUN npm install --unsafe-perm --dev

EXPOSE $SERVER_PORT

CMD [ "npm", "start" ]
