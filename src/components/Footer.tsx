import React from 'react'
import { FaLinkedin, FaGithub, FaRegEnvelope } from 'react-icons/fa'

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({ children }) => {
  return (
    <footer className="flex items-center justify-center p-10 border-t border-gray-200">
      <div className="mr-10">&copy; Tyler Crosse - All rights reserved.</div>
      <a
        className="flex items-center p-4 mx-4"
        href="https://linkedin.com/in/tylercrosse/"
      >
        <FaLinkedin className="mr-2" />
        LinkedIn
      </a>
      <a
        className="flex items-center p-4 mx-4"
        href="https://github.com/tylercrosse/"
      >
        <FaGithub className="mr-2" />
        Github
      </a>
      <a
        className="flex items-center p-4 ml-4"
        href="mailto:tylerscottcrosse@gmail.com?Subject=You're Hired!"
      >
        <FaRegEnvelope className="mr-2" /> Email
      </a>
    </footer>
  )
}

export default Footer
