import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

interface DayOrNightProps {}

const DayOrNight: React.FC<DayOrNightProps> = () => {
  const { toggleDark } = useContext(ThemeContext)
  return (
    <button
      className="iconWrapper"
      onClick={() => {
        toggleDark()
      }}
    >
      <div className="moonOrSun" />
      <div className="moonMask" />
    </button>
  )
}

export default DayOrNight
