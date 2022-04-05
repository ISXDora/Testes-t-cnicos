import React, { createContext, useCallback, useContext } from "react";

type Metric ={
    bpm: string;
    pressureDiastolic: string;
    pressureSystolic: string;
}

interface UserContextData {
    create: (user: {
    name: string;
    birthDate: string;
    measurementDate: string;
    metricsMap: Map<string, Metric>
    }) => Promise<void>;
}

const UserContext = createContext<UserContextData>({}as UserContextData)


export const UserProvider:React.FC=({children})=>{

    const create = useCallback( async (user: UserContextData)=>{

    },[])
    return (
        <UserContext.Provider value={{create}}>
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
