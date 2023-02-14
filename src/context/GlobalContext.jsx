import { createContext } from "react";
import { data } from '../data/data';

export const GlobalContext = createContext('');

const GlobalContextProvider = ({ children }) => {

    const { projects, softwares, about } = data;

    const scrollingAbout = {
        hidden: {
            opacity: 0,
            x: -50,
            viewport:{
              once: false, amount:1
            }
        },
        visible: {
          opacity: 1,
          x: 0,
          transition:{
            type: 'spring',
            duration: 1
          }
        }
    }

    const scrollingSpring = {
        hidden: {
            opacity: 0,
            scale: 0,
            viewport:{
                once:false, amount: 1
            }
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition:{
                type: 'spring',
                duration: 1.2
              }
        }
    }



    return (
        <GlobalContext.Provider value={{ 
            projects,
            softwares,
            about,
            scrollingAbout,
            scrollingSpring
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;