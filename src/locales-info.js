import { createContext, useContext } from "react";

export const LocalesInfoContext = createContext({
  currentLocale: "",
  defaultLocale: "",
  locales: []
});

export const useLocalesInfo = () => {
  const { currentLocale, defaultLocale, locales } = useContext(
    LocalesInfoContext
  );
  return [currentLocale, defaultLocale, locales];
};
