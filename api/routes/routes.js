import { Router } from 'express'
import {
  findUserById,
  findUsers,
  createUser,
  deleteUser,
  updateUser,
  loginUser
} from '../controller/User'

const router = Router()

// GET
router.get('/find/users', findUsers)
router.get('/find/user/:id', findUserById)

// POST
router.post('/create/user', createUser)
router.post('/update/user/:id', updateUser)
router.post('/delete/user/:id', deleteUser)
router.post('/login', loginUser)

export default router
