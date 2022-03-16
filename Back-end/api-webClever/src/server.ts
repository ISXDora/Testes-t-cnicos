import 'reflect-metadata'
import './db'
const express = require('express')
const port = 3000
const app = express()
const routes = require('./routes')


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(routes)


app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))
