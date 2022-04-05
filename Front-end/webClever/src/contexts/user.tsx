import React, { createContext, useCallback, useContext } from "react";

interface UserContextData {
    create: (user:any) => Promise<void>;
}

const UserContext = createContext<UserContextData>({}as UserContextData)


export const UserProvider:React.FC=({children})=>{

    const create = useCallback( async (user: any)=>{

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
