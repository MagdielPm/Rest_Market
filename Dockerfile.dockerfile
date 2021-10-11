
FROM node:14-alpine
COPY / /
RUN npm install --global yarn
ENTRYPOINT yarn start
