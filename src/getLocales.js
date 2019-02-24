import { readdirSync, statSync } from "fs";
import { join } from "path";

const dirs = (path, ignored) =>
  readdirSync(path).filter(
    f => !ignored.find(i => i === f) && statSync(join(path, f)).isDirectory()
  );

export default (localesFolder, ignoredFolders) => {
  const locales = dirs(localesFolder, ignoredFolders);
  return locales;
};
