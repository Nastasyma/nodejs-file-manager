import { homedir } from 'node:os';
import { chdir } from 'node:process';
import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'process';
import { commands } from './utils/commands.js';
import { displayCurDir, displayErrorMessage, displayGoodbyeMessage } from './utils/messages.js';

const usernameArg = process.argv.find(arg => arg.startsWith('--username='));
const username = usernameArg ? usernameArg.split('=')[1] : 'Guest';
console.log(`Welcome to the File Manager, ${username}!`);

chdir(homedir());

const rl = createInterface({ input, output });

process.on('SIGINT', () => {
  displayGoodbyeMessage(username);
  process.exit();
});

rl.on('line', async (input) => {
  if (input === '.exit') {
    displayGoodbyeMessage(username);
    process.exit(0);
  }

  try {
    await commands(input);
  } catch (error) {
    displayErrorMessage(error.message);
  } finally {
    displayCurDir();
  }
}).on('close', () => {
  displayGoodbyeMessage(username);
  process.exit(0);
});
