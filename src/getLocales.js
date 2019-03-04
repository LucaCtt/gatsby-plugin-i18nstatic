import { readdir as readdirCall, stat as statCall } from "fs";
import { promisify } from "util";
import { join } from "path";

const readdir = promisify(readdirCall);
const stat = promisify(statCall);

const dirs = async (path, ignored) => {
  const result = [];
  const files = await readdir(path);

  for (const file of files) {
    const isIgnored = ignored.find(i => file === i);
    const fileStatus = await stat(join(path, file));

    if (isIgnored || !fileStatus.isDirectory()) {
      continue;
    }

    result.push(file);
  }

  return result;
};

export default async (localesFolder, ignoredFolders = []) => {
  const locales = await dirs(localesFolder, ignoredFolders);
  return locales;
};
