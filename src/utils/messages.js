import { log } from "./coloredMsg.js";

export const displayCurDir = () => {
  log.yellow(`You are currently in ${process.cwd()}`);
};

export const displayGoodbyeMessage = (username) => {
  log.cyan(`Thank you for using File Manager, ${username}, goodbye!`);
};

export const displayErrorMessage = (message) => {
  log.red(`Operation failed: ${message}`);
}

