import React from 'react'
import './App.css'
import Component1 from './component1';
import Component2 from './component2';
import { ThemeProvider } from './ThemeContext';

const App = () => {
  // const [darkTheme, setDarkTheme] = useState(true)

  // function toggleTheme() {
  //   setDarkTheme(prevDarkTheme => !prevDarkTheme)
  // }
  return (
    <div>
      <ThemeProvider>
        <Component1 />
        <Component2 />
      </ThemeProvider>
    </div>
  )
}

export default App