
# npm
* `npm init`   初始化，对于初始化的参数可以全为空，初始化所在的父目录不能带大写字母
* `npm install [包名] --save`    安装指定包
* `npm remove  [包名] --save`    删除指定包  --save代表保存到package.json设置中。
* `npm install --production`    安装package.json 里面的包，添加了--production参数不会安装devDependencies下面的包
* `npm install -g [包名] --registry http://192.168.112.92` 下载包，-g参数代表安装在全局下，--registry代表暂时以某地址下载
* `npm install [包名]@~1.12.1` 指定版本号：~代表主版本号和次版本号不变，^代表主版本号不变。其他为最新
### nrm
> nrm可管理npm的下载地址等
* `npm install -g nrm`   安装nrm
* `nrm ls`   列出所有地址
* `nrm add [地址名称] [具体地址]` 增加一个地址
* `nrm del [地址名称]` 删除一个地址
* `nrm use [地址名称]` 设置此地址为默认地址


### browser-sync 浏览器自动刷新插件
> 插件可以在全局下使用，也可以在项目中使用，在项目中使用需要在项目中下载安装

* 全局安装：`npm install browser-sync -g`
* 启动服务：当前目录打开cmd， `browser-sync start --server --no-online --files "./index.html,app.css,css/*.css,*.*"`
* --files 参数后跟文件名，代表监听哪个文件，多个文件用逗号隔开。
* --no-online 如果长时间打不开服务，建议加上这个参数，强制离线打开(就是在没网络的环境下)

### gulp
* 安装命令： `npm install gulp-cli -g`
* gulp使用时还需要在当前项目目录安装：`npm  install gulp --save-dev`  //注意此安装和全局安装的文件包名字不同，同时保证当前目录不是`gulp`的名字
* 使用的时候要将代码写到：`gulpfile.js`中

> gulp 的5个核心方法

* `task("任务名",callback)`
* `src(["./js/*.js","./css/*.css"])`  传入需要处理的文件路径，多个文件则需要转为数组形式
* `dest("./dir")`  指定处理后的文件传出路径
* `watch("./js/*.js",['任务名1'，'任务名2'])` 监听文件如为单个文件，可以为字符串形式，多个文件为数组形式，但第二个参数————执行任务必须为数组形式，不管任务是否为单个
* `run("任务名")` 单个任务可以字符串，多个任务为数组形式或用逗号隔开各任务，


```
var gulp = require("gulp");
gulp.task("script",function(){
gulp.src(["./style.css","./signIn.css"],{base:'src'}) //指定文件路径(第一个参数），并根据原src目录结构输出（第二个参数，可省略）
.pipe(concat("all.css")) //合并为一个文件
.pipe(cssnano())//压缩，混淆
.pipe(gulp.dest("./dist"))//定义输出路径
});

```

> gulp 的其他几个插件，分别用于对html、css、js进行压缩等

> 安装代码:npm install  [插件名称]  --save-dev
>多文件下载  `npm install [插件名称] [插件名称] [插件名称]  --save-dev`

* gulp-concat 代码合并
* gulp-uglify js代码压缩
* gulp-cssnano css代码压缩
* gulp-htmlmin html代码压缩,压缩需要额外传入参数（如空白符等）{collapseWhitespaces:true}

>  在gulp中使用browser-sync监视网页刷新
```
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var cssnano = require("gulp-cssnano");
var htmlmin = require("gulp-htmlmin");
var browserSync = require("browser-sync");

gulp.task("script", function () {
    gulp.src(["./sources/js/ming1.js", "./sources/js/ming2.js"])
        .pipe(concat("ming.js"))
        .pipe(uglify())
        .pipe(gulp.dest("./product/js"));
});
gulp.task("style",function() {
    gulp.src(["./sources/css/ming1.css", "./sources/css/ming2.css"])
        .pipe(concat("ming.css"))
        .pipe(cssnano())
        .pipe(gulp.dest("./product/css"));
})
gulp.task("html",function () {
    gulp.src("./sources/ming.html")
        .pipe(htmlmin({collapseWhitespace:true}))   //html压缩需要加入参数
        .pipe(gulp.dest("./product"))
})

gulp.task("mywatch", function () {
    browserSync.init({
        online:false,      //离线参数
        server:"./product", //定义网站根目录
        files:["./product/*","./product/css/*","./product/js/*"]  //注意*代表的是文件，不代表目录
    });
    gulp.watch(["./sources/js/*.js"],["script"]) //同一目录多个文件或用*.js 表示
    gulp.watch(["./sources/css/ming1.css","./sources/css/ming2.css"],["style"]) //监听多个文件用数组形式，单个文件可为字符串
    gulp.watch("./sources/ming.html", ["html"]);

})
```