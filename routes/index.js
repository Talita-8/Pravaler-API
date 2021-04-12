const { Router } = require('express')
const { Register } = require('./register-router')

const router = Router()

router.use('/register', Register)

module.exports = router