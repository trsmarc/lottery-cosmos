FROM node:lts

COPY ./ts-client/ ./ts-client
COPY ./client/ ./client

WORKDIR ./ts-client
RUN npm i

WORKDIR ../client
RUN npm i
RUN node node_modules/esbuild/install.js

EXPOSE 5173

CMD ["npm", "run", "dev"]