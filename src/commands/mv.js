import fs from 'fs';
import { cwd } from 'process';
import { resolve } from 'node:path';
import { displayErrorMessage } from '../utils/messages.js';

export const mv = async (srcPath, destPath) => {
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

    writeStream.on('finish', () => {
      fs.unlink(sourceFilePath, (error) => {
        if (error) {
          displayErrorMessage(`Error deleting file - ${error.message}`);
        } else {
          console.log(`File ${srcPath} moved to ${destPath} successfully`);
        }
      });
    });

    readStream.pipe(writeStream);
  });
};