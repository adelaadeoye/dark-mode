import React, {useEffect} from "react"
import { useLocalStorage } from './useLocalStorage';
export const useDarkMode = () => {
  
    const [darkMode, setDarkMode] = useLocalStorage("DarkMode",false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
  useEffect (()=>{

    if (darkMode==true){
        document.querySelector("body").classList.add("dark-mode")
    }
    else{
        document.querySelector("body").classList.remove("dark-mode")
    }
  },[darkMode])
    return [darkMode, toggleMode];
  };
  