import fs from 'fs';
import { cwd } from 'process';
import { resolve } from 'node:path';
import { displayErrorMessage } from '../utils/messages.js';
import { log } from '../utils/coloredMsg.js';

export const cp = async (srcPath, destPath) => {
  const sourceFilePath = resolve(cwd(), srcPath);
  const destinationFilePath = resolve(cwd(), destPath);

  fs.access(destinationFilePath, (err) => {
    if (!err) {
      displayErrorMessage(`File ${destPath} already exists`);
      return;
    }

    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(destinationFilePath);

    readStream.on('error', (error) => {
      displayErrorMessage(error.message);
    });

    writeStream.on('error', (error) => {
      displayErrorMessage(error.message);
    });

    readStream.pipe(writeStream);

    readStream.on('end', () => {
      log.green(`File ${srcPath} copied to ${destPath} successfully`);
    });
  });
};