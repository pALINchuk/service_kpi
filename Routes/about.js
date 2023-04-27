const express = require('express')
const Route = express.Router()
const IndexController = require('../Controllers/IndexController')
const Auth = require('../Middleware/Auth')

const {getAbout, getAboutTesting} = require('../Controllers/AboutController')

// Route.use(Auth.validate) //binding middleware here

// Route.get('/about', IndexController.about)
Route.route('/').get(getAbout)
Route.route('/testing').get(getAboutTesting)

module.exports = Route