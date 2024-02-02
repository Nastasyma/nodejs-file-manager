export const displayCurDir = () => {
  console.log(`You are currently in ${process.cwd()}`);
};

export const displayGoodbyeMessage = (username) => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
};

export const displayErrorMessage = (message) => {
  console.log(`Operation failed: ${message}`);
}

