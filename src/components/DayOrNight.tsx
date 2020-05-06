import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

interface DayOrNightProps {}

const DayOrNight: React.FC<DayOrNightProps> = () => {
  const { toggleDark } = useContext(ThemeContext)
  return (
    <button
      className="iconWrapper themeToggle"
      onClick={() => {
        toggleDark()
      }}
    >
      <div className="moonOrSun themeToggle" />
      <div className="moonMask themeToggle" />
    </button>
  )
}

export default DayOrNight
