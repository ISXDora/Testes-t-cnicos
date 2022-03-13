const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => res.json({"title": 'testando json'}))

module.exports = routes 