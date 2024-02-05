import { Message } from "./coloredMsg.js";

export const displayCurDir = () => {
  Message.yellow(`You are currently in ${process.cwd()}`);
};

export const displayGoodbyeMessage = (username) => {
  Message.magenta(`Thank you for using File Manager, ${username}, goodbye!`);
};

export const displayErrorMessage = (message) => {
  Message.red(`Operation failed: ${message}`);
}

