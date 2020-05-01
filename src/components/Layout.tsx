import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import ThemeContext from '../context/ThemeContext'

interface LayoutProps {
  isWhite?: boolean
}

const Layout: React.FC<LayoutProps> = ({ children, isWhite = false }) => {
  const { dark } = useContext(ThemeContext)
  return (
    <div className={dark ? 'themeDark' : 'themeLight'}>
      <Header isWhite={isWhite} />
      {children}
      <Footer isWhite={isWhite} />
    </div>
  )
}

export default Layout
