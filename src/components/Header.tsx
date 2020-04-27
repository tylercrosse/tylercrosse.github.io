import React, { useState } from "react"
import { Link } from "gatsby"

interface HeaderProps {}

const menuItems = [
  { url: '/about', text: 'About'},
  { url: '/projects', text: 'Projects'},
  { url: '/resume', text: 'Resume'},
  { url: '/blog', text: 'Blog'},
]

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  const MenuItem: React.FC<{url: string, text: string}> = ({ url, text }) => (
    <Link
      to={url}
      className="block mt-4 mr-4 text-blue-200 lg:inline-block lg:mt-0 hover:text-white"
    >
      {text}
    </Link>
  )

  return (
    <div className="bg-blue-800">
      <nav className="relative flex flex-wrap items-center justify-between max-w-screen-xl p-6 px-6 mx-auto">
        <Link to="/" className="flex items-center flex-shrink-0 mr-6 text-white">
          <svg
            className="w-8 h-8 mr-2 fill-current"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="text-xl font-semibold tracking-tight">
            Tyler Crosse
          </span>
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={() => {
              setMenuOpen(isMenuOpen => !isMenuOpen)
            }}
            className="flex items-center px-3 py-2 text-blue-200 border border-blue-400 rounded hover:text-white hover:border-white"
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
            isMenuOpen ? "block" : "hidden"
          } lg:block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          <div className="text-sm lg:flex-grow">
            {menuItems.map(item => <MenuItem {...item} />)}
          </div>
          <div>
            <a
              href="/"
              className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-blue-500 hover:bg-white lg:mt-0"
            >
              Download
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
