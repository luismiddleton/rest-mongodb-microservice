import { Router } from 'express'
import {
  findUserById,
  findUsers,
  createUser,
  deleteUser
} from '../controller/User'

const router = Router()

router.get('/find/users', findUsers)
router.get('/find/user/:id', findUserById)
router.post('/create/user', createUser)
router.post('/delete/user/:id', deleteUser)

export default router
