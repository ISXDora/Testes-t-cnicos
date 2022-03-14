import {Router, Response, Request} from 'express'
const routes = Router()

routes.get('/', (request: Request , response: Response) => response.json({title: 'testando json'}))

module.exports = routes 