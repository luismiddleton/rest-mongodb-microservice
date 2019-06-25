import { model, Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import { SALT_ROUNDS } from '../../config'
import { emailIsValid, passwordIsValid } from '../utils/validation'

// Define User schema
const UserSchema = new Schema(
  {
    firstName: { required: [true, 'First name is required'], type: String },
    lastName: { required: [true, 'Last name is required'], type: String },
    email: {
      required: [true, 'An email is required'],
      unique: true,
      type: String,
      validate: v => {
        return new Promise((resolve, reject) => {
          emailIsValid(v) ? resolve(v) : reject(new Error('Failed Validation'))
        })
      }
    },
    username: {
      required: [true, 'A username is required'],
      unique: true,
      type: String,
      lowercase: true
    },
    password: {
      required: [true, 'A password is required'],
      type: String,
      select: false,
    },
    deactivated: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
)

UserSchema.method.fullName = function () {
  return `${this.firstName} ${this.lastName}`
}

UserSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, SALT_ROUNDS)
})

const User = model('User', UserSchema)

export default User
