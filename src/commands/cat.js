import fs from 'fs';
import { cwd } from 'process';
import { resolve } from 'node:path';

export const cat = async (path) => {
  const filePath = resolve(cwd(), path);
  const rs = fs.createReadStream(filePath, { encoding: 'utf8' });

  rs.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  rs.on('error', (error) => {
    console.error('Operation failed:', error.message);
  });

  rs.on('end', () => {
    console.log('File read complete');
  });
};