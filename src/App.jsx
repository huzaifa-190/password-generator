import { useState, useCallback, useEffect } from "react";

import "./App.css";

import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./components/Home";

function App() {
  // state and funcions updates the default values given to createContext as they have same name as them in the ThemeContext file
  const [isDark, setIsDark] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)    
  };


  useEffect(()=>{
    const mainHtml = document.querySelector('html')
    mainHtml.classList.remove("dark",'light')
    if(isDark) {
      mainHtml.classList.add('dark') 
    }
    else {
      mainHtml.classList.add('light') 
    }

  },[isDark])

  // ************************************************** RETURN ********************************************************

  return (
    <ThemeProvider value={{ isDark,toggleTheme}}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
