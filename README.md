# gatsby-plugin-i18nstatic

A gatsby plugin for static i18n.

In particular, this plugin create a copy of every page for each locale, and passes to each page the current locale
(among other info) as `pageContext`.
It also includes a wrapped `Link` component that supports i18n and a `LocaleProvider` that you can use to provide
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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) for more details.

## Special Thanks

This package is for the most part based on
[this blog post](https://blog.significa.pt/i18n-with-gatsby-528607b4da81) by Pedro Brandão.
