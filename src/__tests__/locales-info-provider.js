import React from "react";
import { render } from "@testing-library/react";

import LocalesInfoProvider from "../locales-info-provider";
import { useLocalesInfo } from "../locales-info";

const MOCK_CURRENT_LOCALE = "it";
const MOCK_DEFAULT_LOCALE = "en";
const MOCK_LOCALES = ["en", "it", "es"];

const TestComponent = ({ localesInfo, children, ...props }) => (
  <LocalesInfoProvider localesInfo={localesInfo} {...props}>
    {children}
  </LocalesInfoProvider>
);

const Consumer = () => {
  const [currentLocale, defaultLocale, locales] = useLocalesInfo();

  return (
    <div>
      <p>
        {currentLocale}
        {defaultLocale}
      </p>
      <ul>
        {locales.map(l => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </div>
  );
};

test("Renders correctly", () => {
  const { container } = render(
    <TestComponent
      localesInfo={{
        currentLocale: MOCK_CURRENT_LOCALE,
        defaultLocale: MOCK_DEFAULT_LOCALE,
        locales: MOCK_LOCALES
      }}
    >
      <Consumer />
    </TestComponent>
  );
  expect(container.firstChild).toMatchSnapshot();
});
