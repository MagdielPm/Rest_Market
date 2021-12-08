FROM node:slim
COPY / /

USER root
RUN apt update
RUN DEBIAN_FRONTEND=noninteractive apt install -y wget
RUN apt install -y gnupg
RUN wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add -
RUN apt-get install apt-transport-https
RUN echo "deb https://artifacts.elastic.co/packages/7.x/apt stable main" | tee -a /etc/apt/sources.list.d/elastic-7.x.list
RUN apt-get update && apt-get install -y logstash
COPY /jenkins/deploy/logfile_pipeline.conf /etc/logstash/conf.d/

RUN npm install yarn
RUN yarn install
RUN yarn build
ENTRYPOINT service logstash start && yarn start
