---
title: 'Here comes the Sun 🌞/🌚'
description: 'Building a theme switcher with Tailwind CSS and React.'
date: '2020-05-09'
tags: ['gatsby', 'typescript', 'react', 'tailwindcss', 'evergreen-🌲']
path: '/ideas/theme-switcher'
draft: false
---

![A Solar Eclipse Seen from Earth by Wilhelm Kranz](wilhelm-kranz-a-solar-eclipse-seen-from-earth.jpeg)

Support for dark mode has gotten pretty good in the last year. Windows, Android, iOS, macOS, and most browsers now all support dark mode. This article talks about the advantages of using a dark theme and walks through how to add one to a react application. I discuss how to make a theme setting globally accessible in a Gatsby app using react context, how use that setting to change style settings with TailwindCSS, and how to create a button that animates between a moon and a sun. This post is partially based on this [blog post by Muhammad Muhsin.](https://www.gatsbyjs.org/ideas/2019-01-31-using-react-context-api-with-gatsby/)

## Why Dark?

So why bother with implementing a dark theme? One of the big draws is the aesthetic. Dark themes are cool. Beyond that dark themes can help reduce eye strain, enable a consistent experience with system settings, and place a greater focus on content.

> "Dark themes reduce the luminance emitted by device screens, while still meeting minimum color contrast ratios. They help improve visual ergonomics by reducing eye strain, adjusting brightness to current lighting conditions, and facilitating screen use in dark environments – all while conserving battery power. Devices with OLED screens benefit from the ability to turn off black pixels at any time of day." - [Google's Material Design guidelines](https://material.io/design/color/dark-theme.html)

During Apple's 2018 Worldwide Developer Conference (WWDC), the company [announced](https://www.apple.com/newsroom/2018/06/apple-introduces-macos-mojave/) that it was launching macOS Mojave with a dark mode. As part of the announcement, the [design keynote](https://developer.apple.com/videos/play/wwdc2018/210/) speaker discussed how to approach implementing a dark theme. He emphasized that people implementing a dark theme should:

- Test designs in both light and dark appearances;
- Adopt vibrancy in interfaces;
- Focus on the content of the application; and,
- Allow users to choose the theme they want and to respect their choices.

Apple's [Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/) underline these principles. Another great resource is [Google's Material Design guidelines](https://material.io/design/color/dark-theme.html) which provide another overlapping perspective on implementation.

## 1. Global Setting - Theme Context

A design theme needs to be globally accessible across the site/app. React Context was created to solve the problem of sharing state. Per [the docs](https://reactjs.org/docs/context.html#when-to-use-context):

> "Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language."

#### A little background on React Context

Context follows a pub/sub model. You first create a context object with: `const FooContext = React.createContext(/* defaultFooValue */)`. The context object exposes a Provider React component: `<FooContext.Provider value={/* some value */}>`. This allows consuming components to subscribe to the context value when it changes.

Components can consume a context in three main ways. In the first, hooks can subscribe to a context as such: `useContext` hook which is used like `const value = useContext(FooContext)`. This is the easiest way to consume context. The second way components can subscribe is by setting a `contextType` on a class component like so: `MyClass.contextType = FooContext`. In the final way, you can use render props via the Consumer React component that context exposes.

```jsx
<FooContext.Consumer>
  {value => /* do something with the value like pass it to a child component */}
</FooContext.Consumer>

```

#### Setting up ThemeContext

In order to set up the ThemeContext, I created a `defaultState` with `dark: false` and an empty callback `toggleDark`. It's a binary choice between light and dark and so it makes sense to encode that value with a boolean. When `dark = true` it implies the site should show the dark theme.

I then created a provider component which controls the state of the theme. Context is commonly used in conjunction with a wrapping component that holds a piece of state. The sate value is then passed to a Context Provider which allows other components to subscribe anywhere beneath it in the tree.

To persist the choice of theme between refreshes the site sets `dark` key in local storage with the current theme choice. When the component first mounts we want to do a few things. First, the site tries to load the previous theme choice from local storage if one is available. The `useEffect(callback, [])` gives the ability to only perform this check on mount.

If there is not a previous value in local storage the site tries to check the [browser media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) `prefers-color-scheme`. As of writing this the query has [support for most browsers](https://caniuse.com/#feat=prefers-color-scheme) outside of IE and will follow the system ui choice.

The ThemeProvider also contains a function `toggleDark` which it passes to the ThemeContext to toggle the theme and update the setting in local storage. Here's the entire file that creates the context and handles of the logic I just mentioned:

`ThemeContext.tsx`

```tsx
import React, { useState, useEffect } from 'react'

const defaultState = {
  dark: false,
  toggleDark: () => {},
}
const ThemeContext = React.createContext(defaultState)
// Getting dark mode information from OS!
const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true

const ThemeProvider: React.FC = ({ children }) => {
  const [dark, setDark] = useState(false)
  useEffect(() => {
    // Getting dark mode value from localStorage!
    const lsDark = localStorage.getItem('dark')
    if (lsDark !== null) {
      setDark(JSON.parse(lsDark))
    } else if (supportsDarkMode()) {
      setDark(true)
    }
  }, [])
  const toggleDark = () => {
    localStorage.setItem('dark', JSON.stringify(!dark))
    setDark(!dark)
  }
  return (
    <ThemeContext.Provider
      value={{
        dark,
        toggleDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
export { ThemeProvider }
```

#### Wrapping the root with Context

To make our Context globally accessible I wrapped the root element of the component tree. This allows any children anywhere in the sie to subscribe. To do this I modified the `gatsby-browser.js`. Gatsby looks for a function called `wrapRootElement` in to be exported form that file, which surprisingly it uses to wrap the root element of the site. Here's what that looks like:

`gatsby-browser.js`

```js
import React from 'react'
import './src/css/index.css'
import { ThemeProvider } from './src/context/ThemeContext'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
```

## 2. Applying the theme - changing the UI

TailwindCSS makes applying themes really easy. I used an approach based off [this example repo by Tailwind's creator, Adam Wathan](https://github.com/adamwathan/theming-tailwind-demo). The gist of approach is you set up some classes like with theme css variables which the tailwind config uses to build it's utility classes. Here's the basics of what that looks like:

```css
.themeLight {
  --primary-1: #fdf6e3;
  --secondary-1: #002b36;
}
.themeDark {
  --primary-1: #002b36;
  --secondary-1: #fdf6e3;
}
```

`tailwind.config.js`

```js
module.exports = {
  extend: {
    'primary-1': 'var(--primary-1)',
    'secondary-1': 'var(--secondary-1)',
  },
}
```

Any child elements of the `.themeLight` class will have the lighter theme variables applied. This same technique could also be used for other css properties you wanted to theme, like font settings or anything else. In the above example tailwind generate classes like `bg-primary-1` and `text-secondary-1`. The [docs](https://tailwindcss.com/docs/theme/#app) go into more detail on theming.

To make the entire site change at the same time I subscribed the Layout component to the ThemeContext. The Layout component is then used to wrap all of the other pages. I then used the value of the `dark` boolean to conditionally apply either the `themeLight` or `themeDark` classes.

In testing, you can manually switch the classes to test the themes ability to change the styles of the site:

`Layout.tsx`

```tsx
import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'
import ThemeContext from '../context/ThemeContext'

interface LayoutProps {
  isWhite?: boolean
  mainClasses?: string
}

const Layout: React.FC<LayoutProps> = ({
  children,
  mainClasses = '',
  isWhite = false,
}) => {
  const { dark } = useContext(ThemeContext)
  return (
    <div
      className={`${
        dark ? 'themeDark' : 'themeLight'
      } flex flex-col min-h-screen`}
    >
      <Header isWhite={isWhite} />
      <main
        className={
          mainClasses ? mainClasses : `relative py-10 bg-theme-p5 flex-grow`
        }
      >
        {children}
      </main>
      <Footer isWhite={isWhite} />
    </div>
  )
}

export default Layout
```

## 3. Toggling the theme - Day / Night button

After wiring everything up I needed a UI control to manually switch between themes. I was inspired by the theme switcher on the [Gatsby docs](https://www.gatsbyjs.org/). While digging into the source for the site, I found [their implementation](https://github.com/gatsbyjs/gatsby/blob/master/www/src/components/dark-mode-toggle.js) and a reference to a [codepen by Aaron Iker](https://codepen.io/aaroniker/pen/KGpXZo). Here's the code for my version of the button:

`DayOrNight.tsx`

```tsx
import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const DayOrNight: React.FC = () => {
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
```

The implementation of Aaron's theme switcher used in Gatsby is written using Emotion and Theme UI. I adapted it back to css and used Tailwind CSS's `@apply` to add the utility classes. This reduces the amount of css that would have been added. Here's what the styles for my implementation looks like:

`dayOrNight.css`

```css
.iconWrapper {
  @apply relative inline-flex items-center justify-center w-10 h-10 p-0
  overflow-hidden align-middle bg-transparent border-0 rounded opacity-75
  appearance-none cursor-pointer;
  /*
    roughly compensates for the additional whitespace of this specific
    "icon button" in relation to its "social icon" siblings;
    leave the left untouched for some separation from the aforementioned
  */
  margin-right: -11px;
  /*
    scaling to 75% of the original size
    scales the "moon" shape from 24px to 18px,
    aligning it with the rest of the main nav's
    "social icons"; sun and its rays are slightly larger;
    good for now, too ;-)
  */
  transform: scale(0.75);
  transition: opacity 0.3s ease;
}
.iconWrapper:hover {
  opacity: 1;
}

.moonOrSun {
  @apply relative w-6 h-6 overflow-hidden scale-100 border-2 rounded-full
  bg-sol-blue border-sol-blue;
  transition: all 0.45s ease;
}
.themeDark .moonOrSun {
  @apply overflow-visible border-4 border-sol-blue;
  transform: scale(0.55);
}
.moonOrSun::before {
  @apply absolute w-6 h-6 border-2 rounded-full opacity-100 border-sol-blue;
  content: '';
  right: -9px;
  top: -9px;
  transition: transform 0.45s ease;
  transform: translate(0, 0);
}
.themeDark .moonOrSun::before {
  opacity: 0;
  transform: translate(14px, -14px);
}
.moonOrSun::after {
  @apply absolute w-2 h-2 m-0 -mt-1 -ml-1 rounded-full;
  transform: scale(0);
  box-shadow: 0 -23px 0 var(--sol-blue), 0 23px 0 var(--sol-blue),
    23px 0 0 var(--sol-blue), -23px 0 0 var(--sol-blue),
    15px 15px 0 var(--sol-blue), -15px 15px 0 var(--sol-blue),
    15px -15px 0 var(--sol-blue), -15px -15px 0 var(--sol-blue);
  content: '';
  left: 50%;
  top: 50%;
  transition: all 0.35s ease;
}
.themeDark .moonOrSun::after {
  transform: scale(1);
}
.moonMask {
  @apply absolute top-0 right-0 w-6 h-6 bg-white border-0 rounded-full opacity-100;
  transition: background 0.25s ease, transform 0.45s ease;
  transform: translate(0, 0);
}
.themeDark .moonMask {
  opacity: 0;
  transform: translate(14px, -14px);
}
```
