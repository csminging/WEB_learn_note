//��װ��npm install gulp browser-sync
var gulp = require("gulp");
var browserSync = require("browser-sync");

gulp.task("watch",function(){
    browserSync.init({
        online:false,
        server:"../brilliant", //��վ��Ŀ¼
        files:["../brilliant/*","../brilliant/css/*","../brilliant/js/*"]  //�����仯���ļ�
    });
})
// ������gulp watch