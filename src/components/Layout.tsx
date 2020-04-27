import React from "react"
import Header from "./Header"

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="max-w-screen-xl p-6 mx-auto">
        {children}
      </main>
    </>
  )
}

export default Layout
