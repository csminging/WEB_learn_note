

### node多版本管理工具：nvm
命令：
* nvm ls :表示查看当前系统安装的nodejs版本有哪些
* nvm install nodejs的版本号，表示安装这个版本的nodejs
* nvm use nodejs的版本号
* nvm uninstall nodejs的版本号来卸载掉某个nodejs版本
* nvm在安装完nodejs以后会自动去安装和当前nodejs版本匹配的npm


### global
1. nodejs中的global对象相当于浏览器的window
2. global对象中的所有成员在任何.js代码中都可以直接拿来使用而不需要导入包
3. Global的第二个特点：在.js文件中定义的变量是不会自动添加到global中，//而是需要程序员手动添加


### 直接使用：
- __dirname：取到当前.js文件所在的目录的绝对路径

- __filename获取到当前js文件所在的目录的绝对路径加上本身的文件名称

- process.abort() :终止当前nodejs的执行环境

- process.arch : 获取当前nodejs执行环境所在的平台

- process.argv : 获取当前执行过程中的参数数组 (重点，需要掌握)

- process.stdout: 默认是将一个字符串 输出到屏幕上，同时不会换行