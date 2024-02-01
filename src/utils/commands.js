import { ls, up, cd, cat, add } from "../commands/index.js";

export const commands = async (input) => {
  const command = input
    .match(/(['"`][^'"`]+['"`]|\S+)/g)
    .map((match) => match.replace(/^['"`]|['"`]$/g, ""));

    try {
      const path = command.slice(1).join(" ");

      switch (command[0]) {
        case "up":
          await up();
          break;
        case "cd":
          await cd(path);
          break;
        case "ls":
          await ls();
          break;
        case "cat":
          await cat(path);
          break;
        case "add":
          await add(path);
          break;
        default:
          console.log("Invalid input");
          break;
      }
    } catch (error) {
      console.log("Operation failed:", error.message);
    }
};
