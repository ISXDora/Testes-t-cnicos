import {Router} from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { GetAllUsersController } from './controllers/GetAllUsersController'
import { GetUserController } from './controllers/GetUserController'
const routes = Router()


//Users Route 

routes.post('/users', new CreateUserController().handle) 
routes.get('/users', new GetAllUsersController().handle) 
routes.get('/users/:id', new GetUserController().handle) 

module.exports = routes 