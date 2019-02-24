import getLocales from "./getLocales";

export const onCreatePage = (
  { page, actions },
  { locales: localesArg, localesFolder, ignoredFolders, defaultLocale }
) => {
  const { createPage, deletePage } = actions;

  let locales;

  if (localesArg) {
    locales = localesArg;
  } else {
    locales = getLocales(localesFolder, ignoredFolders);
  }

  if (!locales.find(l => l === defaultLocale)) {
    throw new Error(
      `Default locale ${defaultLocale} not found in available locales.`
    );
  }

  return new Promise(resolve => {
    deletePage(page);

    locales.map(lang => {
      const localizedPath =
        lang === defaultLocale ? page.path : lang + page.path;

      createPage({
        ...page,
        path: localizedPath,
        context: {
          ...page.context,
          localesInfo: {
            currentLocale: lang,
            locales,
            defaultLocale
          }
        }
      });
    });

    resolve();
  });
};
