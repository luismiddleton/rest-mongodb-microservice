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
  JWT_SECRET,
  PORT = 4000
} = process.env

// salt rounds for hashing password(s)
export const SALT_ROUNDS = 11

// cookie settings
export const cookie = {
  maxage: 1000 * 60 * 60 * 48,
  secure: PRODUCTION
}
