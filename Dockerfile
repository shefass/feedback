FROM node:10.13-alpine
ENV NODE_ENV development
ENV MONGO_DB_ADDRESS "mongodb+srv://bandome:OORUpg28ezNwvhPb@cluster0-5dhm9.mongodb.net/feedbacks?retryWrites=true&w=majority"
ENV REACT_APP_SERVER_ADDRESS 'http://localhost:4001/api/feedback'
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --development --silent && mv node_modules ./
COPY . .
EXPOSE 4001
EXPOSE 3000
CMD npm start