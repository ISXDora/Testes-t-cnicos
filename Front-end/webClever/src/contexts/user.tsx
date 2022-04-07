import React, { createContext, useCallback, useContext, useState } from "react";
import { UserData } from "../entities/entities";
import { api } from "../services/api";

type Metric ={
    bpm: string;
    pressureDiastolic: string;
    pressureSystolic: string;
}

interface User {
    name: string;
    id?: string;
    birthDate: string;
    measurementDate: string;
    metricsMap: Map<string, Metric>
}

interface UserContextData {
    create: (user:User) => Promise<void>;
    listUserMetrics: (id:string) => Promise<UserData[]>
    user?: User;

}



const UserContext = createContext<UserContextData>({}as UserContextData)


export const UserProvider:React.FC=({children})=>{
    const [user, setUser] = useState<User>();

    const create = useCallback( async (userData: User)=>{
        console.log(userData)
        const user = {
            name: userData.name,
            birthDate: userData.birthDate,
            measurementDate: userData.measurementDate,
            metricsMap: Object.fromEntries(userData.metricsMap)    
        }
        const newUser = await api.post<User>("/users", user);

        
        if(newUser){
            setUser(newUser.data);
        }


    },[])

    const listUserMetrics = useCallback(async( id:string )=>{
    
            const userMetrics = await api.get<any>(`/user/${id}`)
      
            return userMetrics.data        

    },[])

    return (
        <UserContext.Provider value={{create, user, listUserMetrics}}>
        {children}
        </UserContext.Provider>    
    );
};

export const useUser = ():UserContextData => {

    const context=useContext(UserContext)
    if(!context){
        throw new Error('erro')
    }
    return context;
}
