import getLocales from "../getLocales";
import { readdirSync, statSync } from "fs";

const MOCK_FOLDER = "test";
const MOCK_LOCALES = ["en", "it", "es"];
const MOCK_IGNORED = ["_build"];

jest.mock("fs");
jest.mock("path");

test("Returns array of locales in dir", () => {
  readdirSync.mockReturnValue(MOCK_LOCALES);
  statSync.mockReturnValue({ isDirectory: () => true });

  const locales = getLocales(MOCK_FOLDER);
  expect(locales).toEqual(MOCK_LOCALES);
});

test("Ignores everything except directories in dir", () => {
  readdirSync.mockReturnValue(MOCK_LOCALES);
  statSync
    .mockReturnValueOnce({ isDirectory: () => true })
    .mockReturnValue({ isDirectory: () => false });

  const locales = getLocales(MOCK_FOLDER);
  expect(locales).toEqual([MOCK_LOCALES[0]]);
});

test("Ignores ignored directory in dir", () => {
  readdirSync.mockImplementation(() => [...MOCK_IGNORED, ...MOCK_LOCALES]);
  statSync.mockReturnValue({ isDirectory: () => true });

  const locales = getLocales(MOCK_FOLDER, MOCK_IGNORED);
  expect(locales).toEqual(MOCK_LOCALES);
});

test("Throws error if directory doesn't exist", () => {});
