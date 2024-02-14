import { chdir } from "node:process";
import { cwd } from "process";
import { sep, dirname } from "node:path";
import { displayErrorMessage } from "../../utils/messages.js";

export const up = async () => {
  const currentDir = cwd();

  if (
    currentDir === sep ||
    (currentDir.length === 3 && currentDir.endsWith(":\\"))
  ) {
    displayErrorMessage("You are already in the root directory");
    return;
  }

  chdir(dirname(currentDir));
};
