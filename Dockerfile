FROM node:slim
COPY / /
RUN npm install yarn
RUN yarn install
RUN yarn build
ENTRYPOINT yarn start
