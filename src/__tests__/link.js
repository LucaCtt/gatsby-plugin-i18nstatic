import React from "react";
import { render } from "react-testing-library";

import Link from "../link";
import { useLocalesInfo } from "../locales-info";

jest.mock("../locales-info", () => ({
  useLocalesInfo: jest.fn(() => ["it", "en", ["it", "en", "es"]])
}));

const TestComponent = ({ children, ...props }) => (
  <Link to="/" {...props}>
    {children}
  </Link>
);

test("Renders correctly", () => {
  const { container } = render(<TestComponent>test</TestComponent>);
  expect(container.firstChild).toMatchSnapshot();
});

test("Locale passed as prop overrides default locale", () => {
  const { container } = render(<TestComponent locale="es">test</TestComponent>);
  expect(container.firstChild).toMatchSnapshot();
});

test("Handles default locale correctly", () => {
  useLocalesInfo.mockImplementation(() => ["en", "en", ["en", "it"]]);
  const { container } = render(<TestComponent>test</TestComponent>);
  expect(container.firstChild).toMatchSnapshot();
});
