import {createContext, useState} from "react";

export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
    const [searchQuery, setSearchQuery] = useState('');

    let value={searchQuery, 
        setSearchQuery}

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}