FROM node:10.13
ENV PORT=3000
COPY ./ ./app
WORKDIR /app
RUN npm install
CMD node server.js
EXPOSE 3000