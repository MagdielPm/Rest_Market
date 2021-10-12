FROM node:slim
COPY / /
RUN yarn install
RUN yarn build
ENTRYPOINT yarn start
