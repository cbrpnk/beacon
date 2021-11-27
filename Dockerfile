FROM node:latest

WORKDIR /test
COPY index.html .
COPY test.js .

RUN npm install -g parcel
RUN npm install --save @airgap/beacon-sdk
CMD ["parcel", "index.html"]
