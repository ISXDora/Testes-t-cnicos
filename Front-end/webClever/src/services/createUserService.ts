import {api} from './api'

const createUserService = async (user:any) => {
    const dataReturn = await api.post("/users", user)
    console.log(dataReturn)

  }

export {createUserService}