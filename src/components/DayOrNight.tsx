import React, { useContext } from 'react'

export const ThemeContext: React.Context<[
  string,
  (s: string) => void
]> = React.createContext(['light', () => {}])

interface DayOrNightProps {}

const DayOrNight: React.FC<DayOrNightProps> = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  return (
    <button
      className="iconWrapper"
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
    >
      <div className="moonOrSun" />
      <div className="moonMask" />
    </button>
  )
}

export default DayOrNight
