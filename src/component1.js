import React from 'react';
//import { ThemeContext } from './App';
import {useTheme, useThemeUpdate} from './ThemeContext'

const Component1 = () => { 
  const darkTheme =  useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyle = {
backgroundColor: darkTheme ? "#333" : "#ccc",
color: darkTheme ? "#ccc" : "#333",
padding: "2rem",
margin: "2rem"
  }
  return (
    <div style={themeStyle}>
       <button id="btn" onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Component1;