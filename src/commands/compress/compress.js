import fs from "fs";
import { resolve } from "node:path";
import { cwd } from "process";
import { createBrotliCompress } from "zlib";
import { displayErrorMessage } from "../../utils/messages.js";
import { Message } from "../../utils/coloredMsg.js";

export const compress = async (srcPath, destPath) => {
  const sourceFilePath = resolve(cwd(), srcPath);
  const destinationFilePath = resolve(cwd(), destPath);

  const readStream = fs.createReadStream(sourceFilePath);
  const writeStream = fs.createWriteStream(destinationFilePath);

  const brotliCompress = createBrotliCompress();

  readStream.on("error", (error) => {
    displayErrorMessage(error.message);
  });

  writeStream.on("error", (error) => {
    displayErrorMessage(error.message);
  });

  writeStream.on("finish", () => {
    Message.green(`File compressed and saved to ${destPath} successfully`);
  });

  readStream.pipe(brotliCompress).pipe(writeStream);
};
