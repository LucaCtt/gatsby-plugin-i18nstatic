import getLocales from "./getLocales";

export const onCreatePage = async (
  { page, actions },
  { locales: localesArg, localesFolder, ignoredFolders, defaultLocale }
) => {
  const { createPage, deletePage } = actions;

  const locales = localesArg
    ? localesArg
    : await getLocales(localesFolder, ignoredFolders);

  if (!locales.find(l => l === defaultLocale)) {
    throw new Error(
      `Default locale ${defaultLocale} not found in available locales.`
    );
  }

  await deletePage(page);

  await Promise.all(
    locales.map(async lang => {
      const localizedPath =
        lang === defaultLocale ? page.path : lang + page.path;

      await createPage({
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
    })
  );
};
