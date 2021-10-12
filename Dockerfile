FROM node:14-alpine
COPY / /
RUN npm install --global yarn 
RUN yarn install
RUN yarn build 
ENTRYPOINT [ "yarn start" ]