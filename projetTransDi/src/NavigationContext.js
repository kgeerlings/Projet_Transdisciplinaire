
import React, { createContext, useContext, useState } from 'react';
const NavigationContext = createContext();
export function NavigationProvider({ children }) {
    const [currentPage, setCurrentPage] = useState('Acceuil');
    const navigateTo = (page) => {
        setCurrentPage(page);
    };
    return (
        <NavigationContext.Provider value={{ currentPage, navigateTo }}>
            {children}
        </NavigationContext.Provider>
    );
}
export function useNavigation() {
    return useContext(NavigationContext);
}