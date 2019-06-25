import User from '../models/User'
import { isEmpty, omit } from 'lodash'
import { JWT_SECRET } from '../../config'
import { HAS_ERROR, USER_UNDEFINED, NO_USERS } from "../messages/messages"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const createUser = (req, res) => {

  async function run() {

    const { query, body } = await req

    const firstName = body.firstName || query.firstName
    const lastName = body.lastName || query.lastName
    const email = body.email || query.email
    const username = body.username || query.username
    const password = body.password || query.password

    const merge = { firstName, lastName, email, username, password }

    return await User.create({
      ...merge
    });

  }

  run()
    .then(d => res.status(200).json(d))
    .catch(e => res.status(500).json(e));

}

export const findUserById = (req, res) => {

  async function run() {
    const {
      params: { id }
    } = await req;
    return await User.findById(id)
  }

  run().then(d => res.status(200).json(d)).catch(e => res.status(500).json(e))

}

export const findUsers = (_, res) => {

  async function run() {
    return await User.find()
  }

  run().then(d => isEmpty(d) ? res.json({ ...NO_USERS }) : res.json(d)).catch(e => res.status(500).json(e))

}

export function loginUser(req, res) {

  async function run() {

    const { query: { username, password } } = req;

    const profile = await User.findOne({ username }).select('+password')
    const comparePassword = await bcrypt.compare(password, profile.password)

    if (comparePassword) {

      const { username, email, deactivated } = profile
      const meta = Object.assign({ username, email, deactivated })

      const token = await jwt.sign({ ...meta }, JWT_SECRET, { expiresIn: '1d' })
      return {
        token
      }
    }

  }

  run().then(d => res.json(d)).catch(e => res.json(e))

}

export const updateUser = (req, res) => {

  async function run() {
    const { query, body, params }
      = await req;

    if (isEmpty(query) && isEmpty(body)) {
      res.status(500).json({ ...HAS_ERROR, ...USER_UNDEFINED })
    } else {
      return await User.findByIdAndUpdate(params.id, { ...body, ...query }, { new: true, runValidators: true })
    }

  }

  run()
    .then(d => res.json(d))
    .catch(e => res.status(500).json(e))

}

export const deleteUser = (req, res) => {

  async function run() {
    const { params: { id } } = await req
    return await User.findByIdAndDelete(id)
  }

  run().then(d => res.status(200).json(d)).catch(e => res.status(500).json(e))

}
