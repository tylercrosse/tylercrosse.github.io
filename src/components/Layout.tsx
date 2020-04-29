import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { ThemeContext } from './DayOrNight'

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const themeHook = useState('light')
  return (
    <ThemeContext.Provider value={themeHook}>
      <div className={themeHook[0] === 'light' ? 'themeDark' : 'themeLight'}>
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}

export default Layout
