# gatsby-plugin-i18nstatic

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/d0fe5f17a62e4c0d8a28e5b520ca5061)](https://app.codacy.com/app/LucaCtt/gatsby-plugin-i18nstatic?utm_source=github.com&utm_medium=referral&utm_content=LucaCtt/gatsby-plugin-i18nstatic&utm_campaign=Badge_Grade_Dashboard)

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
