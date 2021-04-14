const { Router } = require('express')
const  School = require('../controllers/schools-controller')

const router = Router()

router.get('/', School.getAll)
router.post('/', School.register)

module.exports = router