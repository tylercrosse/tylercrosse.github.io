import React, { useState } from 'react'
import { Link } from 'gatsby'
import DayOrNight from './DayOrNight'

interface HeaderProps {}

const menuItems = [
  { url: '/', text: 'Home' },
  { url: '/blog', text: 'Blog' },
  // { url: '/projects', text: 'Projects' },
  // { url: '/resume', text: 'Resume' },
  // { url: '/about', text: 'About' },
]

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const MenuItem: React.FC<{ url: string; text: string }> = ({ url, text }) => (
    <Link
      to={url}
      activeClassName="text-sol-blue border-t-2 border-sol-blue"
      className="box-border block p-6 border-t-2 text-theme-s8 border-theme-p6 text-md lg:inline-block lg:mt-0 hover:text-sol-blue font-body"
    >
      {text}
    </Link>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-10 border-b border-theme-p2 bg-theme-p6">
      <nav className="relative flex flex-wrap items-center justify-between max-w-screen-xl px-6 mx-auto">
        <Link
          to="/"
          className="flex items-center flex-shrink-0 mr-6 text-theme-s9 hover:text-blue-800"
        >
          {/* <svg
            className="w-8 h-8 mr-2 fill-current"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg> */}
          <span className="text-xl font-semibold tracking-tight font-display">
            Tyler Crosse
          </span>
        </Link>
        <div className="block py-6 lg:hidden">
          <button
            onClick={() => {
              setMenuOpen(isMenuOpen => !isMenuOpen)
            }}
            className="flex items-center px-3 py-2 text-gray-800 border border-gray-800 rounded hover:text-white hover:border-white"
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
        <div
          className={`w-full ${
            isMenuOpen ? 'block' : 'hidden'
          } lg:block flex-grow lg:flex lg:items-center lg:w-auto justify-end`}
        >
          {menuItems.map(item => (
            <MenuItem {...item} />
          ))}
        </div>
        <DayOrNight />
      </nav>
    </header>
  )
}

export default Header
