import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext(null)

const user = {
  name: 'Kalyani',
  email: 'kalyani@example.com',
  city: 'Hyderabad',
  role: 'Full Stack Developer'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, user }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used inside ThemeProvider')
  return context
}
