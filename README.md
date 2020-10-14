# next-react-app

## The problem

If you want to develop a client-side application with React, you will need some kind of a starter / boilerplate (provided — of course — configuring Webpack isn't your passion).
You'd probably reach for [Create React App](https://github.com/facebook/create-react-app) being the most popular one.

It has some not-so-nice caveats though, including:

- no hot reloading by default (although it's comming in the v4)
- no way to configure / extend Babel config by design
- no way to configure / extend Webpack config by design
- [cumbersome eslint workflow](https://github.com/facebook/create-react-app/issues/808) (if you use custom config, CRA will complain, and there's a good chance you'll get [some errors you can do almost nothing about](https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/63862578#63862578))

## This solution

By using Next.js toolchain you can get the same benefits as CRA gives you, only without the caveats.

Plus you get:

- ability to [prerender & export](https://nextjs.org/docs/advanced-features/static-html-export) your react app as static HTML website (great for SEO)
- a clear path to [Server-Side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) should you need it

and much more

For more information, I highly recommend reading [Replacing Create React App with the Next.js CLI](https://gist.github.com/tannerlinsley/65ac1f0175d79d19762cf06650707830)

## Getting started

This repo is a simple Next.js starter configured to redirect all requests to the index page, effectively behaving like a [SPA](https://en.wikipedia.org/wiki/Single-page_application).
Read the [official docs](https://nextjs.org/docs) for more information.

Development:
1. `npm run dev` to start the development environment

Production:
1. `npm run build` - to build, bundle & export static files
2. `npm start` - to start a server to preview the build

---

Inspired by [@tannerlinsley](https://github.com/tannerlinsley)'s [gist](https://gist.github.com/tannerlinsley/65ac1f0175d79d19762cf06650707830) and [tweet](https://twitter.com/tannerlinsley/status/1303818811322195969) and another [tweet](https://twitter.com/tannerlinsley/status/1310272783096541184)
