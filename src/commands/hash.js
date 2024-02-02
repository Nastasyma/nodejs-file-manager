import crypto from 'crypto';
import fs from 'fs';
import { resolve } from 'node:path';
import { displayErrorMessage } from '../utils/messages.js';

export const hash = async (filePath) => {
  const fileToHash = resolve(filePath);

  const hash = crypto.createHash('sha256');
  const readStream = fs.createReadStream(fileToHash);

  readStream.on('error', (error) => {
    displayErrorMessage(error.message);
  });

  readStream.on('data', (chunk) => {
    hash.update(chunk);
  });

  readStream.on('end', () => {
    console.log(`Hash of ${filePath}: ${hash.digest('hex')}`);
  });
};