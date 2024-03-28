import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './assets/contexts/theme'
import ModeBtn from './components/ModeBtn'
import Card from './components/Card'

function App() {
  const [theme, setTheme] = useState('light')

  const darkTheme = () => {
    setTheme('dark')
  }
  const lightTheme = () => {
    setTheme('light')
  }
  useEffect(() => {
    const classList = document.querySelector('html').classList
    classList.remove('light', 'dark')
    classList.add(theme)
  }, [theme])
  
  return (
    <ThemeProvider value={{theme, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ModeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
              <Card />              
          </div>
        </div>
      </div>
      </ThemeProvider>
  )
}

export default App
