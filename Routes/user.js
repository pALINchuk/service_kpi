const express = require('express')
const Route = express.Router()

const controller = require('../Controllers/UserController')

Route.get('/', (req, res) => {
    res.send('User: info')
})

Route.get('/', controller.get)

module.exports = Route