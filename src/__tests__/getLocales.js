import getLocales from "../getLocales";
import { promises } from "fs";

const { readdir, stat } = promises;

const MOCK_FOLDER = "test";
const MOCK_LOCALES = ["en", "it", "es"];
const MOCK_IGNORED = ["_build"];

jest.mock("fs", () => ({
  promises: {
    readdir: jest.fn(() => Promise.resolve({})),
    stat: jest.fn(() => Promise.resolve({}))
  }
}));

jest.mock("path");

test("Returns array of locales in dir", async () => {
  readdir.mockReturnValue(Promise.resolve(MOCK_LOCALES));
  stat.mockReturnValue(Promise.resolve({ isDirectory: () => true }));

  const locales = await getLocales(MOCK_FOLDER);
  expect(locales).toEqual(MOCK_LOCALES);
});

test("Ignores everything except directories in dir", async () => {
  readdir.mockReturnValue(MOCK_LOCALES);
  stat
    .mockReturnValueOnce({ isDirectory: () => true })
    .mockReturnValue({ isDirectory: () => false });

  const locales = await getLocales(MOCK_FOLDER);
  expect(locales).toEqual([MOCK_LOCALES[0]]);
});

test("Ignores ignored directory in dir", async () => {
  readdir.mockImplementation(() => [...MOCK_IGNORED, ...MOCK_LOCALES]);
  stat.mockReturnValue({ isDirectory: () => true });

  const locales = await getLocales(MOCK_FOLDER, MOCK_IGNORED);
  expect(locales).toEqual(MOCK_LOCALES);
});
