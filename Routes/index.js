const express = require('express')
const Route = express.Router()

const IndexController = require('../Controllers/IndexController')

Route.get('/', IndexController.index)
// Route.get('/about', IndexController.about)

module.exports = Route