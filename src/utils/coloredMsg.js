const reset = "\x1b[0m";

export const log = {
  green: (text) => console.log("\x1b[32m" + text + reset),
  red: (text) => console.log("\x1b[31m" + text + reset),
  blue: (text) => console.log("\x1b[34m" + text + reset),
  yellow: (text) => console.log("\x1b[33m" + text + reset),
  cyan: (text) => console.log("\x1b[36m" + text + reset),
  magenta: (text) => console.log("\x1b[35m" + text + reset),
  white: (text) => console.log("\x1b[37m" + text + reset),
  gray: (text) => console.log("\x1b[90m" + text + reset),
  black: (text) => console.log("\x1b[30m" + text + reset),
};