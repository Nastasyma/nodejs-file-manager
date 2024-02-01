import { chdir } from 'node:process';
import { cwd } from 'process';
import { sep, dirname } from 'node:path';

export const up = async () => {
  const currentDir = cwd();

  if (currentDir === sep || (currentDir.length === 3 && currentDir.endsWith(':\\'))) {
    console.log("You are already in the root directory");
    return;
  }

  chdir(dirname(currentDir));
};