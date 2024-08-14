import { createContext,useContext } from "react";

// We can also give default values to createContext like this 
export const ThemeContext = createContext({
    isDark : false,
    toggleTheme: ()=>{},

})

export const ThemeProvider = ThemeContext.Provider

export const useThemeContext = ()=>{
    return useContext(ThemeContext)
}
