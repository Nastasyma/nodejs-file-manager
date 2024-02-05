import { add, cat, cd, compress, cp, decompress, hash, ls, mv, rm, rn, up, printOsInfo } from "../commands/index.js";

export const commands = async (input) => {
  const command = input
    .match(/(['"`][^'"`]+['"`]|\S+)/g)
    .map((match) => match.replace(/^['"`]|['"`]$/g, ""));

    try {
      const path = command.slice(1).join(" ");
      const [srcFile, destFile] = path.split(' ');

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
        case "rn":
          await rn(srcFile, destFile);
          break;
        case "cp":
          await cp(srcFile, destFile);
          break;
        case "mv":
          await mv(srcFile, destFile);
          break;
        case "rm":
          await rm(path);
          break;
        case "hash":
          await hash(path);
          break;
        case "compress":
          await compress(srcFile, destFile);
          break;
        case "decompress":
          await decompress(srcFile, destFile);
          break;
        case "os":
          await printOsInfo(path);
          break;
        default:
          console.log("Invalid input: command not found");
          break;
      }
    } catch (error) {
      console.log("Operation failed:", error.message);
    }
};
