//安装：npm install gulp browser-sync
var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("watch",function(){
    browserSync.init({
        online:false,
        server:"../brilliant", //网站根目录
        files:["../brilliant/*","../brilliant/css/*","../brilliant/js/*"]  //监听变化的文件
    });
})
// 启动：gulp watch