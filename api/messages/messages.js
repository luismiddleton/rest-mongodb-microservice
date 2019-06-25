import { SUCCESS, FORBIDDEN, ERROR } from './status.types'
import { MSG_USER_UNDEFINED, MSG_NO_USERS } from './messages.types'

// response messages
export const IS_SUCCESSFUL = {
  status: SUCCESS
}

export const IS_FORBIDDEN = {
  status: FORBIDDEN
}

export const HAS_ERROR = {
  status: ERROR
}

// by response type
export const USER_UNDEFINED = {
  messages: MSG_USER_UNDEFINED
}

export const NO_USERS = {
  messages: MSG_NO_USERS
}