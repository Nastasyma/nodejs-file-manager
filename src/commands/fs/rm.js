import fs from "fs";
import { resolve } from "node:path";
import { cwd } from "process";
import { displayErrorMessage } from "../../utils/messages.js";
import { log } from "../../utils/coloredMsg.js";

export const rm = async (filePath) => {
  const fileToDelete = resolve(cwd(), filePath);

  fs.unlink(fileToDelete, (error) => {
    if (error) {
      displayErrorMessage(`Error deleting file - ${error.message}`);
    } else {
      log.green(`File ${filePath} deleted successfully`);
    }
  });
};
