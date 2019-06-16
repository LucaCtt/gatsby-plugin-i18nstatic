import { readdir as readdirCall, stat as statCall } from "fs";
import { promisify } from "util";
import { join } from "path";

// Promisify readdir and stat to enable use of async.
const readdir = promisify(readdirCall);
const stat = promisify(statCall);

/**
 * Returns a list of directories names found in the specified path. Filters out the names
 * in the ignored array.
 * @param {string} path The path in which to look for directories.
 * @param {Object[]} ignored  The array containing the directories to not list.
 */
const dirs = async (path, ignored = []) => {
  const result = [];
  const files = await readdir(path);

  for (const file of files) {
    if (ignored.includes(file)) {
      continue;
    }

    const fileStatus = await stat(join(path, file));
    if (!fileStatus.isDirectory()) {
      continue;
    }

    result.push(file);
  }

  return result;
};

/**
 * Returns a list of locales (names of the directories) found in the specified path. Filters out the directories
 * in the ignored array.
 * @param {*} localesPath The path in which to look for locales.
 * @param {*} ignored The array of ignored directories.
 */
const getLocales = async (localesPath, ignored = []) => {
  const locales = await dirs(localesPath, ignored);
  return locales;
};

export default getLocales;
