import { ls } from "../nwd/ls.js";
import { up } from "../nwd/up.js";

export const commands = async (input) => {
  const command = input
    .match(/(['"`][^'"`]+['"`]|\S+)/g)
    .map((match) => match.replace(/^['"`]|['"`]$/g, ""));

    try {
      switch (command[0]) {
        case "ls":
          await ls();
          break;
        case "up":
          await up();
          break;
        default:
          console.log("Invalid input");
          break;
      }
    } catch (error) {
      console.log("Operation failed:", error.message);
    }
};
