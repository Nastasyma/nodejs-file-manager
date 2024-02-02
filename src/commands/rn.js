import fs from 'fs';
import { cwd } from 'process';
import { resolve } from 'node:path';

export const rn = async (oldName, newName) => {
  const filePath = resolve(cwd(), oldName);
  const newFilePath = resolve(cwd(), newName);

  fs.access(newFilePath, (err) => {
    if (!err) {
      console.error(`Operation failed: File ${newName} already exists`);
      return;
    }

    fs.rename(filePath, newFilePath, (error) => {
      if (error) {
        console.error('Operation failed:', error.message);
      } else {
        console.log(`File ${oldName} renamed to ${newName} successfully`);
      }
    });
  });
};