# seajs

### 说明
1. CMD规范，懒加载

### 定义模块

```
define(function(require,exports,module){
    function add(x,y){
    return x+y;
    }

    exports.add = add;  //暴露方法一
    module.exports.add = add; // 暴露方法二
    module.exports = function(){}
})

```

### 使用步骤
1. 在html引入sea.js `<script src="sea.js"></script>`
2. 定义模块
3. 使用模块
```
    <script>
        seajs.use('./calcmodules/add.js',function(obj){
            var res = obj.add(1,3);  //obj其实就是add.js中的exports对象
            alert(res);
        }
    </script>
```
4. seajs.config({}) (非必须)
```

seajs.config({
    base:"./calcmodules/",  //设定一个统一的基本路径，在seajs.use()的时候省略
    alias:{ 'jquery': 'jquery/jquery/1.10.1/jquery' }            //给模块的完整路径取一个别名，将来在seajs.use()和require()方法都可以使用别名来替代完整路径进行模块加载
})

```

5. 多个模块引到一个文件
```
define(function(require,exports,module){
	//1.0 利用require关键字导入需要的模块
	var addObj = require('./add.js');
	console.log(addObj.add(2,3));

	// var substracObj = require('./substract.js');
	var substracObj = require('jianfa');
	console.log(substracObj.substract(4,3));

	//2.0 将add和substract中的所有方法返回出去
	exports.add = addObj.add;
	exports.substract = substracObj.substract;

});
```
### 注意事项
1. 加载模块的路径如果有多个，则用[]进行包括
2. 回调函数参数个数根据模块数据的个数保持一致，顺序也保持一致


# requirejs
### 说明
1. AMD规范 预加载
2. 不能同时使用sea和require

2. 定义模块和seajs一样
3. 使用： `require(["模块"],fn(obj))`   //注意第一个参数必须是数组形式，第二个是函数，参数个数和顺序对应模块