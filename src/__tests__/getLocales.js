import getLocales from "../getLocales";
import { readdir, stat } from "fs";

const MOCK_FOLDER = "test";
const MOCK_LOCALES = ["en", "it", "es"];
const MOCK_IGNORED = ["_build"];

jest.mock("fs", () => ({
  readdir: jest.fn(),
  stat: jest.fn()
}));

jest.mock("path");

test("Returns array of locales in dir", async () => {
  readdir.mockImplementation((_path, callback) => callback(null, MOCK_LOCALES));
  stat.mockImplementation((_path, callback) =>
    callback(null, { isDirectory: () => true })
  );

  const locales = await getLocales(MOCK_FOLDER);
  expect(locales).toEqual(MOCK_LOCALES);
});

test("Ignores everything except directories in dir", async () => {
  readdir.mockImplementation((_path, callback) => callback(null, MOCK_LOCALES));
  stat
    .mockImplementationOnce((_path, callback) =>
      callback(null, { isDirectory: () => true })
    )
    .mockImplementation((_path, callback) =>
      callback(null, { isDirectory: () => false })
    );

  const locales = await getLocales(MOCK_FOLDER);
  expect(locales).toEqual([MOCK_LOCALES[0]]);
});

test("Ignores ignored directory in dir", async () => {
  readdir.mockImplementation((_path, callback) =>
    callback(null, [...MOCK_IGNORED, ...MOCK_LOCALES])
  );
  stat.mockImplementation((_path, callback) =>
    callback(null, { isDirectory: () => true })
  );

  const locales = await getLocales(MOCK_FOLDER, MOCK_IGNORED);
  expect(locales).toEqual(MOCK_LOCALES);
});
