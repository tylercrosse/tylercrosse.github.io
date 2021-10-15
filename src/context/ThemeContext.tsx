import React, { useState, useEffect } from 'react'

const defaultState = {
  dark: false,
  toggleDark: function() {
    return
  },
}
/** Originally based off this blog post {@link https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/} */
const ThemeContext = React.createContext(defaultState)
// Getting dark mode information from the OS!
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true

const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    // Getting dark mode value from localStorage!
    const lsDark = localStorage.getItem('dark')
    if (lsDark !== null) {
      setDark(JSON.parse(lsDark))
    } else if (supportsDarkMode()) {
      setDark(true)
    }
  }, [])
  const toggleDark = () => {
    localStorage.setItem('dark', JSON.stringify(!dark))
    setDark(!dark)
  }
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
export { ThemeProvider }
