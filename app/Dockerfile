FROM node:18-alpine

WORKDIR  /user/src/app
COPY ./package.json .
RUN npm install

COPY . /user/src/app

EXPOSE 3000

CMD ["npm", "start" ]

# Copy source files into application directory
# COPY --chown=app:app . /user/src/app