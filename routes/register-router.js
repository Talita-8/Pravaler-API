const { Router } = require('express')
const { Register } = require('../controllers/register-controller')

const router = Router()

router.get('/', Register)
router.post('/', Register)

module.exports = router