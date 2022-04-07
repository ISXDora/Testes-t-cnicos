import {Router} from 'express'
import { CreateBpmController } from './controllers/CreateBpmController'
import { CreateDiastolicPressureController } from './controllers/CreateDiastolicPressureController'
import { CreateHealthMetricsController } from './controllers/CreateHealthMetricsController'
import { CreateSystolicPressureController } from './controllers/CreateSystolicPressureController'
import { CreateUserController } from './controllers/CreateUserController'
import { GetAllBpmsController } from './controllers/GetAllBpmsController'
import { GetAllDiastolicPressuresController } from './controllers/GetAllDiastolicPressuresController'
import { GetAllUsersController } from './controllers/GetAllUsersController'
import { GetBpmController } from './controllers/GetBpmController'
import { GetHealthMetricsController } from './controllers/GetHealthMetricsController'
import { GetUserController } from './controllers/GetUserController'
const routes = Router()


//Users Route 

routes.post('/users', new CreateUserController().handle) 
routes.get('/users', new GetAllUsersController().handle) 
routes.get('/user/:id', new GetUserController().handle) 

//Health Metrics Route

routes.post('/metrics', new CreateHealthMetricsController().handle)
routes.get('/metrics/:id', new GetHealthMetricsController().handle)

//bpm
routes.post('/bpm', new CreateBpmController().handle)
routes.get('/bpm/:id', new GetBpmController().handle)
routes.get('/bpms', new GetAllBpmsController().handle)

//Diastolic Pressure Route
routes.post('/diastolic', new CreateDiastolicPressureController().handle)
routes.get('/diastolic', new GetAllDiastolicPressuresController().handle)

//Diastolic Pressure Route
routes.post('/systolic', new CreateSystolicPressureController().handle)
routes.get('/systolic', new GetAllDiastolicPressuresController().handle)


module.exports = routes 