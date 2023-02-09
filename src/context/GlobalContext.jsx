import { createContext } from "react";
import { data } from '../data/data';

export const GlobalContext = createContext('');

const GlobalContextProvider = ({ children }) => {

    const { projects } = data;



    return (
        <GlobalContext.Provider value={{ 
            projects,
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;