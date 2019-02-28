import { onCreatePage } from "../gatsby-node";

const MOCK_LOCALES = ["en", "it"];
const MOCK_DEFAULT_LOCALE = "en";
const MOCK_INEXISTENT_LOCALE = "what";
const MOCK_LOCALES_FOLDER = "test";
const MOCK_PATH = "test";
const MOCK_CONTEXT = { test: "test" };

jest.mock("../getLocales", () => () => Promise.resolve(MOCK_LOCALES));

test("Creates localized page for each locale with locales passed explicitly", async () => {
  const page = {
    path: MOCK_PATH,
    context: MOCK_CONTEXT
  };
  const actions = {
    createPage: jest.fn(() => Promise.resolve()),
    deletePage: jest.fn(() => Promise.resolve())
  };

  await onCreatePage(
    { page, actions },
    { locales: MOCK_LOCALES, defaultLocale: MOCK_DEFAULT_LOCALE }
  );

  expect(actions.createPage).toHaveBeenCalledTimes(MOCK_LOCALES.length);
});

test("Creates localized page for each locale with locales passed as folder", async () => {
  const page = {
    path: MOCK_PATH,
    context: MOCK_CONTEXT
  };
  const actions = {
    createPage: jest.fn(() => Promise.resolve()),
    deletePage: jest.fn(() => Promise.resolve())
  };

  await onCreatePage(
    { page, actions },
    { localesFolder: MOCK_LOCALES_FOLDER, defaultLocale: MOCK_DEFAULT_LOCALE }
  );

  expect(actions.createPage).toHaveBeenCalledTimes(MOCK_LOCALES.length);
});

test("Throws error if default locale is not included in locales", async () => {
  expect.assertions(1);

  const page = {
    path: MOCK_PATH,
    context: MOCK_CONTEXT
  };
  const actions = {
    createPage: jest.fn(() => Promise.resolve()),
    deletePage: jest.fn(() => Promise.resolve())
  };

  try {
    await onCreatePage(
      { page, actions },
      { locales: MOCK_LOCALES, defaultLocale: MOCK_INEXISTENT_LOCALE }
    );
  } catch (e) {
    expect(e).toBeTruthy();
  }
});
