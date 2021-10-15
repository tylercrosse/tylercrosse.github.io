import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import Search from './Search'

export default function SearchModal(): JSX.Element {
  const [modalIsOpen, setIsOpen] = useState(false)

  function onSlashKey(e: KeyboardEvent) {
    if (e.code === 'Slash' || e.key === '/') setIsOpen(true)
  }

  useEffect(() => {
    Modal.setAppElement('#___gatsby')
    window.addEventListener('keyup', onSlashKey)

    return () => window.removeEventListener('keyup', onSlashKey)
  }, [])

  return (
    <>
      <button
        className="flex items-center justify-center w-10 h-10 text-theme-s8 focus:text-sol-blue hover:text-sol-blue"
        onClick={() => {
          setIsOpen(true)
        }}
        aria-label="open search"
      >
        <svg
          className="w-4 h-4 pointer-events-none fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
        </svg>
      </button>
      <Modal
        shouldFocusAfterRender={false}
        className="modal"
        overlayClassName="overlay"
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        contentLabel="search"
      >
        <Search closeModal={() => setIsOpen(false)} />
      </Modal>
    </>
  )
}
