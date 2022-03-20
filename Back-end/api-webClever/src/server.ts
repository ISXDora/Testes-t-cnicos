import 'reflect-metadata'
import { createConnection } from 'typeorm';
const express = require('express')
const port = 5000
const app = express()
const routes = require('./routes')


createConnection().then(async connection =>{
    
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(routes)

    app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))
}).catch(error => console.log("Typeorm connection error: ", error))





