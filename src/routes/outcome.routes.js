const express = require('express')
const router = express.Router()
const outcomeController = require('../controllers/outcome.controller')




router.get('/',outcomeController.list)
router.post('/', outcomeController.add)

module.exports = router 

