import { createContext, useContext } from "react";

export const LocalesInfoContext = createContext({
  currentLocale: "",
  defaultLocale: "",
  locales: []
});

/**
 * Returns the locales info read from LocalesInfoContext in the form of
 * ```[currentLocale, defaultLocale, locales]```, where the last value is an array of all
 * the locales.
 */
export const useLocalesInfo = () => {
  const { currentLocale, defaultLocale, locales } = useContext(
    LocalesInfoContext
  );
  return [currentLocale, defaultLocale, locales];
};
