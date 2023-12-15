FROM node:18-alpine

RUN mkdir /workspace
WORKDIR /workspace

COPY ./* /workspace/
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN npm install --save-dev @angular/cli@10.0.6
# RUN npm install --save-dev @angular-devkit/build-angular@0.1000.6
RUN npm link @angular/cli
RUN npm i

# ARG RUNTIME_ENV=development
# RUN npx nx run slot:serve:$RUNTIME_ENV --verbose
# CMD [ "ng","serve","--host", "0.0.0.0"]
# CMD [ "ls"]
