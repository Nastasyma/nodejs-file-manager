import fs from "fs";
import { resolve } from "node:path";
import os from "os";
import { cwd } from "process";
import { Message } from "../../utils/coloredMsg.js";
import { displayErrorMessage } from "../../utils/messages.js";

export const cat = async (path) => {
  const filePath = resolve(cwd(), path);
  const rs = fs.createReadStream(filePath, { encoding: "utf8" });

  rs.on("data", (chunk) => {
    process.stdout.write(chunk + os.EOL);
  });

  rs.on("error", (error) => {
    displayErrorMessage(error.message);
  });

  rs.on("end", () => {
    Message.green("File read complete");
  });
};
