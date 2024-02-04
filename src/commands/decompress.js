import fs from 'fs';
import { resolve } from 'node:path';
import { cwd } from 'process';
import { createBrotliDecompress } from 'zlib';
import { displayErrorMessage } from '../utils/messages.js';

export const decompress = async (srcPath, destPath) => {
  const sourceFilePath = resolve(cwd(), srcPath);
  const destinationFilePath = resolve(cwd(), destPath);

  const readStream = fs.createReadStream(sourceFilePath);
  const writeStream = fs.createWriteStream(destinationFilePath);

  const brotliDecompress = createBrotliDecompress();

  readStream.on('error', (error) => {
    displayErrorMessage(error.message);
  });

  writeStream.on('error', (error) => {
    displayErrorMessage(error.message);
  });

  writeStream.on('finish', () => {
    console.log(`File decompressed and saved to ${destPath} successfully`);
  });

  readStream.pipe(brotliDecompress).pipe(writeStream);
};