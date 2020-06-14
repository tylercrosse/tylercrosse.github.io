import React, { useState } from 'react'
import { Link } from 'gatsby'
import DayOrNight from './DayOrNight'
import TClogo from './TClogo'
import SearchModal from './Search/SearchModal'

interface HeaderProps {
  isWhite?: boolean
}

const menuItems = [
  { url: '/', text: 'Home' },
  { url: '/blog', text: 'Blog' },
  // { url: '/projects', text: 'Projects' },
  // { url: '/resume', text: 'Resume' },
  // { url: '/about', text: 'About' },
]

const Header: React.FC<HeaderProps> = ({ isWhite = false }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const MenuItem: React.FC<{ url: string; text: string }> = ({ url, text }) => (
    <Link
      to={url}
      activeClassName="text-sol-blue border-t-2 border-sol-blue"
      className="box-border block p-2 m-4 border-t-2 text-theme-s8 border-theme-p6 text-md md:inline-block focus:text-sol-blue hover:text-sol-blue font-body"
    >
      {text}
    </Link>
  )

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 border-b border-theme-p2 ${
        isWhite ? 'bg-white' : 'bg-theme-p6'
      }`}
    >
      <nav className="relative flex flex-wrap items-center justify-between max-w-screen-xl px-6 mx-auto">
        <Link
          to="/"
          className="flex items-center flex-shrink-0 py-2 mr-6 text-theme-s9 hover:text-sol-blue"
        >
          <TClogo />
          <span className="ml-4 text-xl font-semibold tracking-tight font-display">
            Tyler Crosse
          </span>
        </Link>
        <div
          className={`w-full ${
            isMenuOpen ? 'block' : 'hidden'
          } md:block md:flex-grow md:flex md:items-center md:w-auto md:justify-end`}
        >
          <SearchModal />
          {menuItems.map(item => (
            <MenuItem key={item.url} {...item} />
          ))}
        </div>
        <div className="flex items-center">
          <DayOrNight />
          <div className="block py-6 ml-6 md:hidden">
            <button
              onClick={() => {
                setMenuOpen(isMenuOpen => !isMenuOpen)
              }}
              className="flex items-center px-3 py-2 border rounded text-theme-s8 border-theme-s8 hover:text-sol-blue hover:border-sol-blue"
            >
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
