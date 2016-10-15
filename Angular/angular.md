# 指令
> `ng-app`
* 告诉angular从哪里开始管理代码，管理ng-app所在元素以及其子元素

> `ng-click`
* 注册鼠标点击事件

> `ng-model`
* 用来获取文本框等的值 `ng-model="val"`

> `ng-init`
* 用来初始化ng-model指定的值 如 `ng-init="val='小明'"`

> `ng-controller`
* 指定一个控制器来管理页面的代码

> `ng-bind="name"`
* 实现类似于表达式的功能，只能用在双标签上，{{name}} ,可以解决表达式后解析出现的闪屏问题

> `class = "ng-cloak"`
* angular解析完后会移除所有的ng-cloak 样式

> `ng-bind-html`
* 用来渲染html字符串，需要引入angular-sanitize插件，使用方式和ng-bind一样。

> `ng-repeat` : 用来循环某个元素，以输出数组中的数据，写法类似于forin循环
* 示例:`<li ng-repeat="item in data">{{item.name}}</li>` item 为变量，data为数据
* 示例: `<li ng-repeat="key in obj">{{obj[key]}}</li>`(这里的key代表属性值)  `<li ng-repeat="(key,value) in obj">{{key}}{{value}}</li>`
* 遍历的数组中如果有重复元素，加上`track by $index` 如： `<li ng-repeat="item in data track by $index ">{{item}}</li>`
+ ng-repeat在遍历数组时会额外提供其他的数据
    * $even:表示当前数据是否是第偶数个，是从索引0开始计算的。
    * $odd: 表示当前数据是否是第奇数个，是从索引0开始计算的。
    * $first:表示当前数据是否是第一条数据
    * $last:表示当前数据是否是最后一条数据
    * $middle:表示当前数据不是第一条也不是最后一条。

> ng-class,动态的操作元素的样式，写法类似于从一个对象中取相应的value值
* 示例:`<li ng-class="{'A':'red','B':'green',C:'yellow'}['A']"></li>`  angular会把取到的值添加到对应的class中。
* 示例:`<li ng-class="{'red':true,'green':true,yellow:false}"><li>`

> `ng-show` : 需要提供一个布尔值，隐藏或显示元素，为true时显示

> `ng-hide` : 需要提供一个布尔值，隐藏或显示元素，为true时隐藏

> `ng-if` :   也需要提供一个布尔值，移除或显示元素，为true显示元素，false时移除元素.

> `ng-switch` : 根据值的不同显示不同的元素,配合ng-switch-when使用,类似于js中的switch case
* 示例：
```
<ul ng-switch="name">
    <li ng-switch-when="小明">{{name}}</li>
</ul>
//$scope.name = "小明"
```




### 其他常用指令
- ng-checked:
  + 单选/复选是否选中,ng-model双向数据绑定,ng-checked是单向
- ng-selected:
  + 是否选中
- ng-disabled：
  + 是否禁用
- ng-readonly:
  + 是否只读

### 常用事件指令
不同于以上的功能性指令，Angular还定义了一些用于和事件绑定的指令：

- ng-blur：//失去焦点事件
- ng-focus：// 获取焦点事件  .focus()
- ng-change：// 文本值改变事件
- ng-copy：// 复制事件
- ng-click：// 单击事件  ng-click="add()"
- ng-dblclick：//双击事件
- ng-submit: // 表单提交


### 自定义指令
> 通过模块对象的directive方法创建，第一个参数是指令的名字，第二个参数类似控制器第二个参数，
只不过，第二个参数中的function中只需要返回一个对象，关键是这个对象的属性

```
//注意，自定义指令与控制器无关
app.directive("myBtn",[function(){  // 名字必须驼峰命名，使用指令则必须my-btn这样使用
  var obj = {
    template:"",
    templateUrl: url/scriptID,
    restrict:"ECMA",  // 以什么方式使用指令，E：element；C：class；M：注释；A：attribute；
    replace:true,           //默认为false,为true时，会用模板字符串替换自定义指令所在标签。否则是包含在指令标签内
    scope:{
      myclass:'@type',     //属性值以@开头，后面跟上自定义指令所在标签的属性名
      type:'@'           // 这是上面的简写方式.,type就是自定义指令所在标签的属性名
    },                   // scope.的属性可以在模板使用表达式输出，并且只能在模板使用。
    transclude:true, //默认false,为true时，angular会将自定义指令所在标签的innerHTML位置的值插入模板中，
    然后把模板整体再添加到它的innerHTML位置，还需要通过ng-transclude指令指定标签innerHTML位置的值
    插入到模板中的哪个元素中。不能够与replace为true同用。
  };

  return obj;
}])

```

> 参数说明

* template:"标签"              //标签字符串
* templateUrl: url/scriptId   // html的url或者是script:type=text/ng-template模板标签的id值
* restrict："ECMA"
```
E:  <my-btn></my-btn>
C:  <div class = "my-btn"></div>
A:  <div my-btn></div>
M:  <!-- directive:my-btn -->   //注意：注释这种必须配合 replace：true 才起效果

```
* replace ：true/false;  //注意，添加了此属性true，那么必须保证模板中只有一个标签元素了，否则报错

* scope:指令的作用域
> 三种形式
1. {}： 完全隔离作用域，指令作用域不受父作用域影响，也不影响父作用域
2. scope:true： 创建一个新的作用域，此作用域继承父作用域，也就是受父作用域影响，但不影响父作用域
3. scope:false或不写： 受父作用域影响，并影响父作用域

```
//第一种方式

<my-btn type = "red"></my-btn>  // 指令
<button class = "myclass"></button>  // 模板
scope：{
  myclass:"@type",  获取指令中的type属性值，替代模板中的myclass位置
}
```


```
//第二种方式

<my-btn type = "red"></my-btn>  // 指令
<button class = "type"></button>  // 模板
scope：{
  type:"@",  获取指令中的type属性值，替代模板中的type位置(简写形式)
}
```
* transclude:默认为false，为true时，angular将自定义指令标签中的innerHTML值插入模板，再将模板整体添加到它的innerHTML位置，注意不能和replace共用
```
<my-btn>模板插入内容</my-btn>    //指令

<button transclude>哈哈</button>   //模板,仅指定第一条替换内容，并且替换后内部多了一 个span标签
<button>哈哈</button>

transclude:true,

结果：
<button transclude>模板插入内容</button>
<button>哈哈</button>

```

* link： 指定一个function(scope,element,attributes){}
    * scope: 类似于控制器的$scope,但scope只能在模板中引用
    * element: 自定义指令所在标签的jqLite对象
    * attributes：是一个对象，获取自定义指令所在标签的所有属性，如果有"-",会转为驼峰命名

 ```
link:function(scope,element,attributes) {
                scope.name = "123";     //{{name}}可以在模板中使用
                element.on("click",function() { // 为指令替换后的元素标签添加点击事件
                    console.log(123)
                });
                console.log(attributes) //获取到自定义指令中所有的自定义属性对象，
                               //但注意同名属性如：ming="123",data-ming="345"后面标准h5属性会优先于前面属性获取到，即覆盖掉前面
            }
 ```


### 指令的标准使用方式
data-ng-xxx,在使用angular指令时，只需要在原先的指令前加上data-前缀。

### CDN (扩展)
  - Content Delivery NetWork

  - 1.减轻带宽压力
  - 2.能够根据不用地区由不同的服务器返回数据
  - 3.利用浏览器对静态资源缓存的策略。



# 表达式
> `{{}}`   在两个大括号中写数据模型，最终被渲染出来

# 函数使用地方
1. 事件：`ng-click = "add()"`
2. 属性：`ng-class = "add()"`
3. 表达式: `{{add()}}`
* 三种地方均可使用函数调用，效果根据返回值

### angular 模块的创建
> `var app = angular.module("模块名",[])` 创建模块，必须有第二个参数为数组，数组内容为依赖模块，若无，为空
> `var app = angular.module("模块名")` 获取模块
* 需要将模块名字写在`ng-app`属性的值中


### angular 控制器的创建
> 通过模块对象创建控制器
1. `app.controller("控制器名",function($scope){})` $scope是用来存储数据模型的，此方式在压缩代码时会出现错误
2. `function demoController($scope){}` 旧版本的一种方式,将全局函数当做控制器来使用，污染全局变量严重
3. `app.controller("控制器名",["$scope","$log",function($scope,$log){}])` 推荐方式

### 面向对象的方式创建控制器
  - angular会把controller的回调函数当作构建函数来使用
  - 需要在之前ng-controller属性值后加上` as  obj `,这里的obj就是构建函数new出来的对象

```html
  <body ng-app="myApp">
  <div ng-controller="demoController as obj ">
    {{name}}
    {{obj.age}}
  </div>
  <script src="node_modules/angular/angular.js"></script>
  <script>
    // 1.创建模块
    var app = angular.module('myApp',[]);

    // 2.创建控制器
    app.controller('demoController',function($scope){
       $scope.name="小明";
       this.age=18;
    })
  </script>
</body>
```

### $watch
> 用于监视数据模型的变化
* 允许监视方法。
```
$scope.$watch("数据模型的名字/字符串格式",function(变化后的值,变化前的值){
//这个方法默认执行一次
})
```

### hashchange 事件
> 监听地址栏的hash变化



### 依赖注入的原理
  - 就查根据名字传入参数
  - 获取形参的方式：toString()



# 过滤器
##### currency
##### date
##### filter
```
{{data |filter:{completed:true}}} //过滤条件为拥有completed：true
```
##### json
##### limitTo
##### lowercase
##### number
##### orderBy
##### upprcase


# 路由
1. 下载 angular-route.js并导入 angular-route.js
2. 创建angular模块,注入依赖["ngRoute"]
3. 对此模块进行路由配置，app.config(arr),此方法仅一个参数，类似于口控制器的第二个参数
    * 在参数里的function需要注入$routeProvider，如：["$routeProvider",function($routeProvider){}]
4. 在函数里对$routeProvider操作，调用when(可以链式调用多次),两个参数，第一个参数为锚点值，第二个参数为配置对象
    * $routeProvider.when("url锚点值/不包含#号",{templateUrl:"url",controller:"routeController"})
         * 配置对象中的templateUrl地址参照 主模块
    * when方法第一个参数后面加：号，":"后写参数名，表示可以匹配做任意字符(必须要有字符)，此参数名可被作为控制器中$routeParams的属性
    * 接着when链式编程 .otherwise(directTo:"url"); 表示当路径均不符合when的时候，调用此方法改变锚点，再重新调用when。
5. 如果config中配置了controller属性，则使用模块创建控制器，名称对应上面的调用
    * 可以在控制器中注入"$routeParams"以得到路由参数,此参数属性为config中锚点中":"后的值，属性值为锚点值
6. 控制器中的$scope数据模型仅在模板中使用

### 示例：
```
(function (angular) {
    //创建热映电影模块
    var app = angular.module("movie.in_theaters", ["ngRoute"]);
    //配置路由
    app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/in_theaters", {
            templateUrl: "./in_theaters/in_theaters.html",   //路径参照主模块
            controller: "movie.in_theatersController",       //调用控制器

        })
            .otherwise("/in_theaters")                  //当锚点不符合上面规则的时候，调用此方法设置当前锚点
    }]);
    // 控制器，注入多个模块，$http 可使用ajax功能
    app.controller("movie.in_theatersController", ["$scope", "$http","$routeParams", function ($scope, $http,$routeParams) {
      $http.get('./in_theaters/in_theaters.json') //使用get方法发送ajax请求
            .then(function (respond) {           // 成功后的调用函数
              console.log(respond.data.subjects)
               $scope.in_theaters_data=respond.data.subjects;
            });
    }])
})(angular);
```


# 服务

> 控制器只会在需要时被实例化，并且不再需要就会被销毁。这意味 着每次切换路由或重新加载视图时，当前的控制器会被AngularJS清除掉。
服务提供了一种能在应用的整个生命周期内保持数据的方法，它能够在控制器之间进行通 信，并且能保证数据的一致性。

### 5种方法创建服务
##### factory()
##### service(name,constructor)
* name：字符串
* constructor :构造函数，我们调用它来实例化服务对象
##### constant()
##### value()
##### provider()


# $event
##### 阻止冒泡：$event.stopPropagation()
```
<input type="button" ng-click = "abc($event)"/>

$scope.abc = function($event){
    $event.stopPropagation()
}
```





