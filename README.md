# REST API Microservice

## MongoDB

#### Author: Luis Middleton

##### Dependencies

```json
    "bcrypt": "^3.0.6",
    "body-parser": "^1.19.0",
    "dotenv": "^8.0.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.5.12",
    "morgan": "^1.9.1",
    "nodemon": "^1.19.1",
    "passport": "^0.4.0",
    "passport-local": "^1.0.0"
```

## Install

#### [Yarn](https://yarnpkg.com/en/docs/install)

```sh
yarn
```

#### NPM

```sh
npm install
```

## Start

```sh
npm start
```

#### Environment variables

`MONGO_USER`: Username for Mongo Atlas Cluster

`MONGO_PASSWORD`: Password for Mongo Atlas Cluster

`MONGO_DOMAIN`: URL Domain for Mongo Atlas Instance (e.g. cluster100@somecloud.somedomain)

`MONGO_DATABSE`: Database name withing Cluster (e.g. Users, App)

`PORT`: Port to be used (Defaults to `3500`)

`JWT_SECRET`: [JSON Web Token](https://jwt.io) Secret Key
