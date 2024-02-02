import { resolve } from 'node:path';
import { chdir } from 'node:process';
import { cwd } from 'process';
import { displayErrorMessage } from '../utils/messages.js';

export const cd = async (path) => {
  const currentDir = cwd();
  const targetDir = resolve(currentDir, path);

  try {
    chdir(targetDir);
  } catch (error) {
    displayErrorMessage(error.message);
  }
};