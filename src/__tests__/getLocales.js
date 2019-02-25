import getLocales from "../getLocales";
import fs from "fs";

jest.mock("fs", () => ({
  readdirSync: jest.fn(() => []),
  statSync: jest.fn(() => ({
    isDirectory: () => true
  }))
}));

jest.mock("path", () => ({
  join: jest.fn(() => "test")
}));

test("Returns array of locales in dir", () => {
  fs.readdirSync.mockImplementation(() => ["en", "it"]);
  const locales = getLocales("test");
  expect(locales).toEqual(["en", "it"]);
});

test("Ignores everything except directories in dir", () => {
  fs.readdirSync.mockImplementation(() => ["en", "it"]);
  fs.statSync
    .mockImplementationOnce(() => ({ isDirectory: () => true }))
    .mockImplementationOnce(() => ({ isDirectory: () => false }));

  const locales = getLocales("test");

  expect(locales).toEqual(["en"]);
});

test("Ignores ignored directory in dir", () => {
  fs.readdirSync.mockImplementation(() => ["en", "it", "build"]);
  const locales = getLocales("test", ["build"]);
  expect(locales).toEqual(["en", "it"]);
});
