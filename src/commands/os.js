import os from "os";
import { log } from "../utils/coloredMsg.js";

export const printOsInfo = async (arg) => {
  switch (arg) {
    case "--EOL":
      log.green(`System End-Of-Line: ${JSON.stringify(os.EOL)}`);
      break;
    case "--homedir":
      log.green(`Home directory: ${os.homedir()}`);
      break;
    case "--username":
      log.green(`System user name: ${os.userInfo().username}`);
      break;
    case "--architecture":
      log.green(`CPU architecture: ${os.arch()}`);
      break;
    case "--cpus":
      log.green(`Overall amount of CPUs: ${os.cpus().length}`);
      os.cpus().forEach((cpu, index) => {
        log.green(
          `CPU ${index + 1} - Model: ${cpu.model.trim()}, Speed: ${
            cpu.speed
          } MHz (${(cpu.speed / 1000).toFixed(2)} GHz)`
        );
      });
      break;
    default:
      log.red(
        "Invalid input: arg must be --EOL, --homedir, --username, --architecture or --cpus"
      );
  }
};
