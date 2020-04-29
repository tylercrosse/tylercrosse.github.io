import React, { useState } from 'react'

interface DayOrNightProps {}

const DayOrNight: React.FC<DayOrNightProps> = () => {
  const [isDark, toggleDark] = useState(false)
  return (
    <div className={isDark ? 'themeDark' : ''}>
      <button className="iconWrapper" onClick={() => toggleDark(!isDark)}>
        <div className="moonOrSun" />
        <div className="moonMask" />
      </button>
    </div>
  )
}

export default DayOrNight
