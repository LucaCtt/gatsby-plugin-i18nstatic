# gatsby-plugin-i18nstatic

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d0fe5f17a62e4c0d8a28e5b520ca5061)](https://app.codacy.com/app/LucaCtt/gatsby-plugin-i18nstatic?utm_source=github.com&utm_medium=referral&utm_content=LucaCtt/gatsby-plugin-i18nstatic&utm_campaign=Badge_Grade_Dashboard)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/3caa69feac2a46b0b4c5cdf230dc38e2)](https://www.codacy.com/app/LucaCtt/gatsby-plugin-i18nstatic?utm_source=github.com&utm_medium=referral&utm_content=LucaCtt/gatsby-plugin-i18nstatic&utm_campaign=Badge_Coverage)
[![build](https://img.shields.io/circleci/project/github/LucaCtt/gatsby-plugin-i18nstatic.svg)](https://circleci.com/gh/LucaCtt/gatsby-plugin-i18nstatic)
[![version](https://img.shields.io/npm/v/gatsby-plugin-i18nstatic.svg)](https://www.npmjs.com/package/gatsby-plugin-i18nstatic)
[![dependencies](https://img.shields.io/david/lucactt/gatsby-plugin-i18nstatic.svg)](https://www.npmjs.com/package/gatsby-plugin-i18nstatic)

A gatsby plugin for static i18n.

In particular, this plugin create a copy of every page for each locale, and passes to each page the current locale
(among other info) as `pageContext`.
It also includes a wrapped `Link` component that supports i18n and a `LocalesInfoProvider` that you can use to provide
the locale info as context.

## Installation

With npm:

```sh
npm i gatsby-plugin-i18nstatic
```

With yarn:

```sh
yarn add gatsby-plugin-i18nstatic
```

## Usage

### Plugin

Add the following section to your `gatsby-config.js`:

```js
{
  resolve: "gatsby-plugin-i18nstatic",
    options: {
      locales: ["en", "es"],
      defaultLocale: "en"
  }
}
```

where the `locales` option is a list of all the locales you want to generates pages for, and `defaultLocale`
is the locale to associate with the root (`/`) path of your app.

For example, say that we have a page called `home`. In this case the plugin would generate a page with the path
`/home` with the english locale, and a page at `/es/home` with the spanish locale.

Of course, `defaultLocale` is optional: if you don't want this behaviour, simply omit it.

An alternative to specifing the locales as an array is to instead use the `localesFolder` option (and if needed, also the
`ignoredFolders` one), like this:

```js
{
  resolve: "gatsby-plugin-i18nstatic",
    options: {
      localesFolder: `${__dirname}/src/locales`,
      ignoredFolders: ["_build"],
      defaultLocale: "en"
  }
}
```

This way, the plugin will consider every directory in the folder `${__dirname}/src/locales` as a locale, while
also obviously ignoring the ones specified in `ignoredFolders`.

### Components

This plugin also included a couple of useful React components:

- `Link`: a lighweight wrapper around Gatsby's Link component, with support for localized routes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) for more details.

## Special Thanks

This package is for the most part based on
[this blog post](https://blog.significa.pt/i18n-with-gatsby-528607b4da81) by Pedro Brandão.
