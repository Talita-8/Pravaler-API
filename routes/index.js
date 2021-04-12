const { Router } = require('express')
const  Register  = require('./register-router')
const  School  = require('./schools-router')


const router = Router()

router.use('/register', Register)
router.use('/school', School)

module.exports = router