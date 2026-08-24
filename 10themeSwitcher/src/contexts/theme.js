import { createContext, useContext } from "react";

//In this file we have created the context and provider together to save time and 
// always remember whenever we create Context we use the Provider to use the values stored inside the Context

export const  ThemeContext = createContext({
    // In createContext we can pass both variable(themeMode) and method(darkTheme)
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// exporting ThemeProvider directly here
export const ThemeProvider = ThemeContext.Provider 

export default function useTheme() { //creating custom hook here 
    // exporting all the context inside ThemeContext varibale using the useContext hook below 
    return useContext(ThemeContext)
}