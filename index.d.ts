// Type definitions for gatsby-plugin-i18nstatic
// Project: https://github.com/LucaCtt/gatsby-plugin-i18nstatic
// Definitions by: Luca Cotti <https://github.com/LucaCtt>

import { FunctionComponent, ReactNode } from "react";

export interface LinkProps {
  to: string;
  locale?: string;
  children: ReactNode;
}

export interface LocalesInfo {
  currentLocale: string;
  defaultLocale: string;
  locales: string[];
}

export interface LocalesInfoProviderProps {
  localesInfo: LocalesInfo;
  children: ReactNode;
}

export const Link: FunctionComponent<LinkProps>;
export const LocalesInfoProvider: FunctionComponent<LocalesInfoProviderProps>;

export function useLocalesInfo(): string[];
