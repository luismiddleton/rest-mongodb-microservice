import User from '../models/User'
import { isEmpty } from 'lodash'

export const createUser = (req, res) => {
  const { query, body } = req

  const firstName = body.firstName || query.firstName
  const lastName = body.lastName || query.lastName
  const email = body.email || query.email
  const username = body.username || query.username
  const password = body.password || query.password

  User.create({
    firstName,
    lastName,
    email,
    username,
    password
  })
    .then(data => {
      console.log(data)
      res.status(200).json({
        status: 'Success',
        message: `New record has been created for ${firstName} ${lastName}`,
        data
      })
    })
    .catch(err => {
      res.status(500).json(err)
    })
}

export const findUserById = (req, res) => {
  const {
    params: { id }
  } = req

  User.findById(id)
    .then(data => {
      if (isEmpty(data)) {
        res.json({
          message: 'User could not be found'
        })
      } else {
        res.json({
          data
        })
      }
    })
    .catch(err => res.status(500).json(err))
}

export const findUsers = (req, res) => {
  User.find()
    .then(data => {
      if (isEmpty(data)) {
        res.json({
          message: 'Users could not be found'
        })
      } else {
        res.json({
          data
        })
      }
    })
    .catch(err => res.status(500).json(err))
}

export const deleteUser = (req, res) => {
  const {
    params: { id }
  } = req

  User.findByIdAndDelete(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch(err => res.status(500).json(err))
}
