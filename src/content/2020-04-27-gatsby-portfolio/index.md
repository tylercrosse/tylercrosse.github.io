---
title: 'Redoing my Portfolio Site with Gatsby'
description: 'The slow evolution of my personal portfolio site.'
date: '2020-04-27'
tags: ['gatsby', 'javascript', 'typescript', 'graphql', 'tailwindcss']
path: '/blog/redoing-my-portfolio-site-with-gatsby'
draft: false
---

## New blog who dis?

To be fair this is my first blog, and this is the first post. Welcome!

## Site architecture

- Most of the styling is done with the help of [tailwindcss](https://tailwindcss.com/).
- Powered by Gatsby with the React components written in [Typescript](https://www.typescriptlang.org/).
- Implementing these choices was fast tracked by building off of the [gatsby-typescript-tailwind starter](https://www.gatsbyjs.org/starters/impulse/gatsby-typescript-tailwind/).
- Blog posts are written in markdown which is parsed by remark. Syntax highlighting for code snippets is handled by prismjs. Gatsy makes this easy with plugins, [gatsby-transformer-remark](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/) and [gatsby-remark-prismjs](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/) do most of the heavy lifting.
- Moon/Sun theme switcher inspired by the switcher on the gatsby docs page which has it roots in a [codepen](https://codepen.io/aaroniker/pen/KGpXZo) created by Aaron Iker. The tailwind theme switching is modeled of a repo by [M. Appelman](https://github.com/huphtur/tailwind-theme-switcher/).

### Goals

This project has started with some simple goals. A lot of software development is weighing pros and cons

- Practice Typescript, and Gatsby.
- Try out some new tools like tailwindcss.
- Re-do my portfolio site.
- Start blogging (practice writing).

### Typescript

- js dev for 5 years
- have wanted to try it
- starting with a simple project

- resources I used

https://www.typescriptlang.org/v2/docs/handbook/
https://react-typescript-cheatsheet.netlify.app/
https://basarat.gitbook.io/typescript/
https://www.youtube.com/watch?v=Z5iWr6Srsj8
https://www.youtube.com/watch?v=nViEqpgwxHE

### Gatsby

- flexibility, ease of adding data + plugins
- graphql but not really
- comfort with react, experience at rosetta

### 1. Design

I started by looking at a ton of landing pages on [lapa.ninja](https://www.lapa.ninja/) for inspiration. For this project I wanted to keep the design simple and clean. There are a ton of wonderful pages out there and narrowing it down to a few designs to draw from was difficult. Two of the sites I wanted to pull queues from were [Mode Remote](https://moderemote.com/) and [The A-Z of AI](https://atozofai.withgoogle.com/intl/en-US/). They both have dramatic
display fonts, warm palettes, and minimal layouts.

![](mode-remote.png)

![](the-a-z-of-ai.png)

For colors I used [solarized light/dark](https://github.com/altercation/solarized). Solarized is the coding theme I've used for the last 4 years and felt like a natural choice to use. The light version is similar to the palettes of my inspiration sites.

For typography I'm trying RecoletaAlt as a display font and Roboto as a body font. Recoleta feels like a warmer, funner version of some classic 1970s fonts like ITC Souvenir. Picking a body font was tricky, there a ton out there that all look great. Lato, Open Sans, Poppi, and Montserrat were all some of my finalists. It's a totally subjective descion. In the side by side comparisons I did using [typetester](http://classic.typetester.org/) I felt like Roboto was the most readable.

![](font-and-colors.png)

[Figma](https://www.figma.com/) is what I used to prototype the design for this site. This was my first time using it and I'm impressed. I've got a good amount of experience with Adobe XD, Illustrator, Photoshop, and Sketch. Figma was intuitive, fast, had all of the features I needed, and best of all was free. I'm definitely inspired to do a project with [WebAssembly](https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/) now too!

### 2. Styling - Tailwind

The frontend community has been buzzing about tailwindcss since it's release and this project seemed like a great opportunity to try it out. So far it's been a treat! At it's core it's a collection of css classes that individually apply small amounts of css. Things like the class `flex` which adds `display: flex` to whatever element it's applied to.

Tailwind utility classes are generated dynamically based on a config. This allows you to use themes, set custom sizes for margin, padding, breakpoints, fonts, and a good bit more. Tailwind includes utilities to make handle responsive designs incredibly easy. It also allows you build components or reuse sets of utility classes with the `@apply` directive.

For example here's the markup for the footer of this site. I was able to build it in less than 5 minute wihtout writing any css and that includes searching the tailwind docs. You can't get much easier than that!

```html
<footer
  class="flex items-center justify-center p-10 bg-white border-t border-theme-p2"
>
  <div class="mr-10 text-theme-s7">© Tyler Crosse - All rights reserved.</div>
  <a
    class="flex items-center p-4 mx-4 text-theme-s7 hover:text-theme-s8"
    href="https://linkedin.com/in/tylercrosse/"
  >
    <!-- svg omitted -->
    LinkedIn
  </a>
  <a
    class="flex items-center p-4 mx-4 text-theme-s7 hover:text-theme-s8"
    href="https://github.com/tylercrosse/"
  >
    <!-- svg omitted -->
    Github
  </a>
  <a
    class="flex items-center p-4 ml-4 text-theme-s7 hover:text-theme-s8"
    href="mailto:tylerscottcrosse@gmail.com?Subject=You're Hired!"
  >
    <!-- svg omitted -->
    Email
  </a>
</footer>
```

Another interesting consequence of using tailwind is it reduces the amount of css that needs to be bundled with apps. One issue with standard css practices like BEM, OOCSS, or even css in js options like Emotion or styled components is the size of css bundles. It's not uncommon for bundle size to grow nearly linearly with the amount of elements. In short, the more elements, the more css. Style attributes end up getting duplicated over and over again.

With tailwindcss the css bundle grows closer to logarithmically, with a max near the total number of css rules available. The classes are reused but the css isn't duplicated.

### Blog Posts

- Remark + Prism + styles
- inspo from medium, nytimes, novella, gatsby docs
- why remark vs. mdx

### Theme Switcher

- how it works

### Deployment

- github pages?

### Future state

- design improvments - esp. around the experience on mobile
- tags
  - tag graph - https://www.data-to-viz.com/graph/network.html
- tag snippets with language
- better handling of images, this may involve using the mdx plugin
- search - algolia, elasticlunr, js-search https://www.gatsbyjs.org/docs/adding-search/
