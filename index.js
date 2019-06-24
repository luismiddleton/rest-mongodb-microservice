import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import mongoose from 'mongoose'
import routes from './api/routes/routes'
import {
  PORT,
  MONGO_APP,
  MONGO_DOMAIN,
  MONGO_PASSWORD,
  MONGO_USER,
  PRODUCTION
} from './config'

// intialize express instance
const app = express()

// URL to MongoDB
const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_DOMAIN}/${MONGO_APP}?retryWrites=true&w=majority`

// Connect to DB
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useCreateIndex: true })

// connection to mongodb
mongoose.connection.on(
  'error',
  console.error.bind(console, 'MongoDB connection error:')
)

// set mongoose options
mongoose.set('debug', !PRODUCTION)

// logger
app.use(logger('dev'))

// body parser, set extended to false
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

// map routes to instance
app.use('/api', routes)

// map instance to http
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
