import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import ThemeContext from '../context/ThemeContext'

interface LayoutProps {
  isWhite?: boolean
  mainClasses?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  mainClasses = '',
  isWhite = false,
}) => {
  const { dark } = useContext(ThemeContext)
  return (
    <div
      className={`${
        dark ? 'themeDark' : 'themeLight'
      } flex flex-col min-h-screen`}
    >
      <Header isWhite={isWhite} />
      <main
        className={
          mainClasses ? mainClasses : `relative py-10 bg-theme-p5 flex-grow`
        }
      >
        {children}
      </main>
      <Footer isWhite={isWhite} />
    </div>
  )
}

export default Layout
