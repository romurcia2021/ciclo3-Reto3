const express = require('express')
const router = express.Router()
const incomeController = require('../controllers/income.controller')

//const Income = require('../models/income')

// const incomeController = require('../controllers/income.controller')

router.get('/',incomeController.list)
router.post('/', incomeController.add)

module.exports = router 

