const { Router } = require('express')
const  Register = require('../controllers/register-controller')

const router = Router()

router.get('/', Register.getAll)
router.post('/', Register.register )

module.exports = router