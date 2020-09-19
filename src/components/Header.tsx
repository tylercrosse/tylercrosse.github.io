import React, { useState } from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import DayOrNight from './DayOrNight'
import TClogo from './TClogo'
import SearchModal from './SearchModal'

interface HeaderProps {
  isWhite?: boolean
}

const menuItems = [
  { url: '/', text: 'Home' },
  { url: '/blog', text: 'Blog' },
]

export const Header: React.FC<HeaderProps> = ({ isWhite = false }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const MenuItem: React.FC<{ url: string; text: string }> = ({ url, text }) => (
    <Link
      to={url}
      activeClassName="text-sol-blue"
      className="box-border block p-4 mx-2 my-1 sm:py-2 sm:my-0 text-theme-s8 text-md sm:inline-block focus:text-sol-blue hover:text-sol-blue font-body"
    >
      {text}
    </Link>
  )

  return (
    <header
      className={`border-b border-theme-p2 ${
        isWhite ? 'bg-white' : 'bg-theme-p6'
      }`}
    >
      <nav className="relative max-w-screen-xl py-2 mx-auto">
        <div className="flex flex-wrap items-center justify-between ">
          <Link
            to="/"
            className="flex items-center flex-shrink-0 px-4 py-2 ml-2 mr-6 text-theme-s9 hover:text-sol-blue"
          >
            <TClogo />
            <span className="hidden ml-4 text-xl font-semibold tracking-tight xs:inline font-display">
              Tyler Crosse
            </span>
          </Link>
          <div className="sm:flex sm:items-center sm:mr-6">
            <div className="flex items-center">
              <SearchModal />
              <div className="block sm:hidden">
                <DayOrNight />
              </div>
              <button
                onClick={() => {
                  setMenuOpen(isMenuOpen => !isMenuOpen)
                }}
                className="flex items-center px-2 py-2 mx-3 sm:hidden text-theme-s8 hover:text-sol-blue"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  {isMenuOpen && (
                    <path
                      fillRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!isMenuOpen && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
            <div className="hidden sm:flex sm:items-center">
              {menuItems.map(item => (
                <MenuItem key={item.url} {...item} />
              ))}
              <DayOrNight />
            </div>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
          {menuItems.map(item => (
            <MenuItem key={item.url} {...item} />
          ))}
        </div>
      </nav>
    </header>
  )
}

const HeadroomHeader: React.FC<HeaderProps> = ({ isWhite }) => (
  <Headroom>
    <Header isWhite={isWhite} />
  </Headroom>
)

export default HeadroomHeader
