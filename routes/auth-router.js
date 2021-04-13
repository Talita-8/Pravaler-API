const { Router } = require('express')
const AuthController = require('../controllers/auth-controller')
const router = Router()

router.post('/', AuthController.login);

module.exports = router