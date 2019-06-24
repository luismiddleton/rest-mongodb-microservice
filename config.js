import { config } from 'dotenv'
// config files

// intialized config
config()

// environment variables
export const {
  PRODUCTION,
  DEVELOPMENT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DOMAIN,
  MONGO_APP,
  PORT = 4000
} = process.env

// salt rounds for hash
export const SALT_ROUNDS = 11

// cookie settings
export const cookie = {
  maxage: 1000 * 60 * 60 * 48,
  secure: PRODUCTION
}
