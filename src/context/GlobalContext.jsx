import { createContext } from "react";
import { data } from '../data/data';

export const GlobalContext = createContext('');

const GlobalContextProvider = ({ children }) => {

    const { projects, softwares, about } = data;


    return (
        <GlobalContext.Provider value={{ 
            projects,
            softwares,
            about
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;