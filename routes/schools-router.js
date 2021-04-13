const { Router } = require('express')
const School = require('../controllers/schools-controller')
const AuthController = require('../controllers/auth-controller')
const router = Router()

router.get('/', AuthController.auth, School.getAll)
router.post('/', School.register)
router.put('/:id', AuthController.auth, School.schoolUpdate)
router.delete('/:id', AuthController.auth, School.schoolDelete)

module.exports = router