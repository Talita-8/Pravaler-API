const { Router } = require('express')
const  School = require('../controllers/schools-controller')

const router = Router()

router.get('/', School.getAll)
router.post('/', School.register)
router.put('/:id', School.schoolUpdate)
router.delete('/:id', School.schoolDelete)

module.exports = router