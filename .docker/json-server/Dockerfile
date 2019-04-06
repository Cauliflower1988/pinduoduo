FROM node:10

RUN npm install -g json-server

WORKDIR /data
VOLUME /data

EXPOSE 3000
ADD ./.docker/json-server/run.sh /run.sh
ENTRYPOINT ["bash", "/run.sh"]
