import React, { useContext } from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'

const Component2 = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyle = {
    backgroundColor: darkTheme ? "yellow" : "green",
    color: darkTheme ? "green" : "yellow",
    padding: "2rem",
    margin: "2rem"
  }
  return (
    <div style={themeStyle}>
      Hello
      <button id='btn' onClick={toggleTheme}>Change BG</button>
    </div>
  )
}

export default Component2