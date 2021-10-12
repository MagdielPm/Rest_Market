FROM node:latest
COPY / /
RUN yarn install
RUN yarn build 
ENTRYPOINT [ "yarn start" ]
