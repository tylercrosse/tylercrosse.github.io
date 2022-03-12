/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react'
import 'focus-visible/dist/focus-visible.js'
import './src/css/tailwindBase.css'
import './src/css/tailwindComponents.css'
import './src/css/themeVars.css'
import './src/css/fonts.css'
import './src/css/search.css'
import './src/css/postStyles.css'
import './src/css/dayOrNight.css'
import './src/css/tailwindUtilities.css'
import { ThemeProvider } from './src/context/ThemeContext'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
