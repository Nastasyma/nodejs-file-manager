import { readdir, stat } from "fs/promises";
import { cwd } from "process";
import { join } from "path";

export const ls = async () => {
  const filesAndFolders = await readdir(cwd(), { withFileTypes: true });

  const list = [];
  for (const item of filesAndFolders) {
    const fullPath = join(cwd(), item.name);
    const itemStat = await stat(fullPath);
    const type = itemStat.isDirectory() ? "directory" : "file";
    list.push({ Name: item.name, Type: type });
  }

  list.sort((a, b) => {
    if (a.Type !== b.Type) {
      return a.Type.localeCompare(b.Type);
    }
    return a.Name.localeCompare(b.Name);
  });

  console.table(list);
};


