1. 安装node
2. npm install less -g
3. webStorm 设置：
   - 工具->外部工具：
      * 程序->node.js安装的程序路径；
      * 参数-> C:\Users\ming\AppData\Roaming\npm\node_modules\less\bin\lessc $FilePath$  `less程序路径，然后空格跟$FilePath$`
   - file watchers
      * params-> C:\Users\ming\AppData\Roaming\npm\lessc.cmd   `为lessc.cmd路径`
      * 输出目录-> $FileNameWithoutExtension$.css
4. 新建styleFile,选择less文件