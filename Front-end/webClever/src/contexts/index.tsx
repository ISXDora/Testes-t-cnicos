import { UserProvider } from "./user";


const AppProvider: React.FC = ({ children }) => {
    return(
        <UserProvider>{children}</UserProvider>
    )
}

export {AppProvider}