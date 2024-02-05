# File manager

**Task:** https://github.com/AlreadyBored/nodejs-assignments/blob/main/assignments/file-manager/assignment.md

# The program is started by npm-script:
```bash
npm  run  start  --  --username=your_username
```
# List of operations:  
 **up** -  go upper from current directory;  
 **cd *path_to_directory*** - go to dedicated folder from current directory (e.g. cd my_folder);  
 **ls** - print in console list of all files and folders in current directory;  
 **cat *path_to_file*** - read file and print it's content in console (e.g. cat text.txt);  
 **add *new_file_name*** - create empty file in current working directory (e.g. add text2.txt);  
 **rn *path_to_file new_filename*** - rename file (e.g. rn text2.txt text3.txt);  
 **cp *path_to_file path_to_new_directory*** - copy file (e.g. cp text2.txt my_folder\text2.txt);  
 **mv *path_to_file path_to_new_directory*** - move file (e.g. mv text2.txt my_folder\text2.txt);  
 **rm *path_to_file*** - delete file (e.g. rm text2.txt);  
 **hash *path_to_file*** - calculate hash for file and print it into console (e.g. hash text2.txt);  
 **compress *path_to_file path_to_destination*** - compress file (using Brotli algorithm) (e.g. compress text2.txt text22.txt);  
 **decompress *path_to_file path_to_destination*** - decompress file (using Brotli algorithm) (e.g. decompress text2.txt text22.txt);  

 **os --EOL** - print to console default system End-Of-Line;  
 **os --cpus** - print to console host machine CPUs info;  
 **os --homedir** - print to console home directory;  
 **os --username** - print to console current system user name;  
 **os --architecture** - print to console CPU architecture for which Node.js binary has compiled;  