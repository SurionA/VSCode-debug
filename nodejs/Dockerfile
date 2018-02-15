FROM node:9.5.0

LABEL maintainer="SurionA <frere.maxime@gmail.com>"
LABEL description="Provides an image with basic nodejs service"


RUN mkdir -p /src/nodejs/
COPY source/* /src/nodejs/

RUN cd /src/nodejs/ && rm -rf node_modules && npm i

EXPOSE 9229

CMD cd /src/nodejs/ && npm run debug-docker