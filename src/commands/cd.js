import { chdir } from 'node:process';
import { cwd } from 'process';
import { resolve } from 'node:path';

export const cd = async (path) => {
  const currentDir = cwd();
  const targetDir = resolve(currentDir, path);

  try {
    chdir(targetDir);
  } catch (error) {
    console.error('Operation failed:', error.message);
  }
};