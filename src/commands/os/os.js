import os from "os";
import { Message } from "../../utils/coloredMsg.js";

export const printOsInfo = async (arg) => {
  switch (arg) {
    case "--EOL":
      Message.green(`System End-Of-Line: ${JSON.stringify(os.EOL)}`);
      break;
    case "--homedir":
      Message.green(`Home directory: ${os.homedir()}`);
      break;
    case "--username":
      Message.green(`System user name: ${os.userInfo().username}`);
      break;
    case "--architecture":
      Message.green(`CPU architecture: ${os.arch()}`);
      break;
    case "--cpus":
      Message.green(`Overall amount of CPUs: ${os.cpus().length}`);
      os.cpus().forEach((cpu, index) => {
        Message.green(
          `CPU ${index + 1} - Model: ${cpu.model.trim()}, Speed: ${
            cpu.speed
          } MHz (${(cpu.speed / 1000).toFixed(2)} GHz)`
        );
      });
      break;
    default:
      Message.red(
        "Invalid input: arg must be --EOL, --homedir, --username, --architecture or --cpus"
      );
  }
};
