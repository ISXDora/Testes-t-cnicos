import {Router} from 'express'
import { CreateHealthMetricsController } from './controllers/CreateHealthMetricsController'
import { CreateUserController } from './controllers/CreateUserController'
import { GetAllUsersController } from './controllers/GetAllUsersController'
import { GetHealthMetricsController } from './controllers/GetHealthMetricsController'
import { GetUserController } from './controllers/GetUserController'
const routes = Router()


//Users Route 

routes.post('/users', new CreateUserController().handle) 
routes.get('/users', new GetAllUsersController().handle) 
routes.get('/users/:id', new GetUserController().handle) 

//Health Metrics Route
routes.post('/metrics', new CreateHealthMetricsController().handle)
routes.get('/metrics/:id', new GetHealthMetricsController().handle)




module.exports = routes 