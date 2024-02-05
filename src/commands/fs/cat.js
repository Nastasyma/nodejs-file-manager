import fs from "fs";
import { resolve } from "node:path";
import { cwd } from "process";
import { displayErrorMessage } from "../../utils/messages.js";
import { log } from "../../utils/coloredMsg.js";

export const cat = async (path) => {
  const filePath = resolve(cwd(), path);
  const rs = fs.createReadStream(filePath, { encoding: "utf8" });

  rs.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  rs.on("error", (error) => {
    displayErrorMessage(error.message);
  });

  rs.on("end", () => {
    log.green("File read complete");
  });
};
