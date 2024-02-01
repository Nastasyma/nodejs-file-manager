import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'process';
import { displayCurDir } from './utils/curDir.js';
import { chdir } from 'node:process';
import { homedir } from 'node:os';
import { goodbyeMessage } from './utils/goodByeMsg.js';
import { commands } from './utils/commands.js';

const usernameArg = process.argv.find(arg => arg.startsWith('--username='));
const username = usernameArg ? usernameArg.split('=')[1] : 'Guest';
console.log(`Welcome to the File Manager, ${username}!`);

chdir(homedir());

const rl = createInterface({ input, output });

process.on('SIGINT', () => {
  goodbyeMessage(username);
  process.exit();
});

rl.on('line', async (input) => {
  if (input === '.exit') {
    goodbyeMessage(username);
    process.exit(0);
  }

  try {
    await commands(input);
  } catch (error) {
    console.error('Operation failed:', error.message);
  } finally {
    displayCurDir();
  }
}).on('close', () => {
  goodbyeMessage(username);
  process.exit(0);
});
