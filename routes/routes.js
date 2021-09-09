const express = require('express')

const notesRouter = require('./noteLogic')

const app = express()

app.use('./noteLogic', notesRouter)

module.exports = app
