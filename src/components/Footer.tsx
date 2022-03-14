import React from 'react'
import { FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa'

interface FooterProps {
  isWhite?: boolean
}

const Footer: React.FC<FooterProps> = ({ children, isWhite = false }) => {
  return (
    <footer
      className={`flex items-center justify-center p-4 border-t lg:p-10 border-theme-p2 ${
        isWhite ? 'bg-white' : 'bg-theme-p6'
      }`}
    >
      <div className="block mr-32 md:flex">
        <a
          className="flex items-center p-4 mx-4 text-theme-s7 hover:text-theme-s8"
          href="https://linkedin.com/in/tylercrosse/"
        >
          <FaLinkedin className="mr-2 fill-current" />
          LinkedIn
        </a>
        <a
          className="flex items-center p-4 mx-4 text-theme-s7 hover:text-theme-s8"
          href="https://github.com/tylercrosse/"
        >
          <FaGithub className="mr-2 fill-current" />
          Github
        </a>
        <a
          className="flex items-center p-4 ml-4 text-theme-s7 hover:text-theme-s8"
          href="mailto:tylerscottcrosse@gmail.com?Subject=You're Hired!"
        >
          <FaRegEnvelope className="mr-2 fill-current" /> Email
        </a>
      </div>
      <div className="block md:flex">
        <a
          className="flex items-center p-4 mx-4 text-theme-s7 hover:text-theme-s8"
          href="/ideas"
        >
          Ideas
        </a>
        <a
          className="flex items-center p-4 mx-4 text-theme-s7 hover:text-theme-s8"
          href="/tags"
        >
          Tags
        </a>
      </div>
    </footer>
  )
}

export default Footer
