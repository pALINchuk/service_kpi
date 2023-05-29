const express = require('express')
const Route = express.Router()

const IndexController = require('../Controllers/IndexController')

Route.get('/', IndexController.index)
Route.get('/getRecord', IndexController.getRecord)
Route.get('/records', IndexController.getAllRecords)
Route.post('/getExactRecord', IndexController.getExactRecord)

// Route.get('/comments', IndexController.getAllComments)
// Route.get('/comments/new', IndexController.createCommentForm)
// Route.post('/comments', IndexController.createComment)
// Route.get('/about', IndexController.about)

module.exports = Route