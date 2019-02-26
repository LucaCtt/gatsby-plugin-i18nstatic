import React, { useContext } from "react";
import { render } from "react-testing-library";

import LocalesInfoProvider from "../locales-info-provider";
import { useLocalesInfo } from "../locales-info";

const TestComponent = ({ localesInfo, children, ...props }) => (
  <LocalesInfoProvider localesInfo={localesInfo} {...props}>
    {children}
  </LocalesInfoProvider>
);

const Consumer = () => {
  const [currentLocale, defaultLocale, locales] = useLocalesInfo();

  return (
    <div>
      {currentLocale} - {defaultLocale} -{" "}
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
        currentLocale: "en",
        defaultLocale: "it",
        locales: ["it", "en"]
      }}
    >
      <Consumer />
    </TestComponent>
  );
  expect(container.firstChild).toMatchSnapshot();
});
