import 'reflect-metadata';
const express = require('express');
const cors = require('cors')
const port = 5000;
const app = express();
const routes = require('./routes');
import { createConnection, useContainer } from 'typeorm';

app.use((req, res, next) => {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,POST');
    next();
})


createConnection().then(async connection =>{
    
    app.use(cors());
    app.use(express.json())
    app.use(express.urlencoded({extended: false}))
    app.use(routes)

    app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))
}).catch(error => console.log("Typeorm connection error: ", error))





