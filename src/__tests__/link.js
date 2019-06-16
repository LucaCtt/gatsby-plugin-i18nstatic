import React from "react";
import { render } from "@testing-library/react";

import Link from "../link";

const MOCK_TEXT = "test";
const MOCK_CURRENT_LOCALE = "it";
const MOCK_DEFAULT_LOCALE = "en";
const MOCK_LOCALES = ["en", "it", "es"];
const MOCK_PATH = "/";

jest.mock("../locales-info", () => ({
  useLocalesInfo: jest.fn(() => [
    MOCK_CURRENT_LOCALE,
    MOCK_DEFAULT_LOCALE,
    MOCK_LOCALES
  ])
}));

const TestComponent = ({ children, ...props }) => (
  <Link to={MOCK_PATH} {...props}>
    {children}
  </Link>
);

test("Renders correctly", () => {
  const { container } = render(<TestComponent>{MOCK_TEXT}</TestComponent>);
  expect(container.firstChild).toMatchSnapshot();
});

test("Has correct href if current locale is equal to the default one", () => {
  const { getByText } = render(
    <TestComponent locale={MOCK_DEFAULT_LOCALE}>{MOCK_TEXT}</TestComponent>
  );

  expect(getByText(MOCK_TEXT)).toHaveAttribute("href", `${MOCK_PATH}`);
});

test("Has correct href if current locale is different from the default one", () => {
  const { getByText } = render(
    <TestComponent locale={MOCK_CURRENT_LOCALE}>{MOCK_TEXT}</TestComponent>
  );

  expect(getByText(MOCK_TEXT)).toHaveAttribute(
    "href",
    `/${MOCK_CURRENT_LOCALE}${MOCK_PATH}`
  );
});
