const { Router } = require('express')
const  Register = require('../controllers/register-controller')

const router = Router()

router.get('/', Register.getAll)
router.post('/', Register.register)
router.put('/:id', Register.userUpdate)
router.delete('/:id', Register.userDelete)

module.exports = router