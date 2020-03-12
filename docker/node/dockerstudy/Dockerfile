FROM daocloud.io/library/node:7.9-wheezy
# 在容器中创建一个目录
RUN mkdir -p /usr/src/nodejs/
#定位到容器的工作目录
WORKDIR /usr/src/nodejs/
# RUN/COPY 是分层的， package.json提前， 只是没修改就不会重新安装
COPY package.json /usr/src/nodejs/package.json
RUN cd /usr/src/nodejs/
RUN npm i

COPY . /usr/src/nodejs/

EXPOSE 1314
CMD yarn start