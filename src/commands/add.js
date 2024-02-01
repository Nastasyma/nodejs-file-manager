import fs from 'fs';
import { cwd } from 'process';
import { resolve } from 'node:path';

export const add = async (fileName) => {
  const filePath = resolve(cwd(), fileName);

  fs.writeFile(filePath, '', { flag: 'wx' }, (error) => {
    if (error) {
      console.log('Error creating file:', error.message);
    } else {
      console.log(`File ${fileName} created successfully`);
    }
  });
};