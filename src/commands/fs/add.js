import fs from "fs";
import { resolve } from "node:path";
import { cwd } from "process";
import { displayErrorMessage } from "../../utils/messages.js";
import { Message } from "../../utils/coloredMsg.js";

export const add = async (fileName) => {
  const filePath = resolve(cwd(), fileName);

  fs.writeFile(filePath, "", { flag: "wx" }, (error) => {
    if (error) {
      displayErrorMessage(error.message);
    } else {
      Message.green(`File ${fileName} created successfully`);
    }
  });
};
