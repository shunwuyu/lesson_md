FROM daocloud.io/library/node:7.9-wheezy
LABEL maintainer="shunwuyu <shunwu2001@163.com>"

RUN rm -rf /app
RUN mkdir /app
WORKDIR /app

COPY . /app
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build
RUN mv ./dist/* ./

EXPOSE 8082

CMD BUILD_ENV=docker node app.js

