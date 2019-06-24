require('dotenv').config()
const jwt = require('jsonwebtoken')
const secretKey = process.env.JWT_SECRET

module.exports = {
  createToken: (req, res) => {
    const {
      query: { ...payload }
    } = req
    const token = jwt.sign({ ...payload }, secretKey, {
      expiresIn: '30d'
    })
    res.json({
      token
    })
  }
}
