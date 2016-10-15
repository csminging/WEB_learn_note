###  ng-if
- 值：true/false
- 注意点：
    + ng-if创建后将创建一个新的作用域，并将父作用域继承过来
    + 如果ng-if新作用域中，没有覆盖父作用域的变量，那么父作用域中变量的改变依然影响ng-if的新作用域
    + 如果ng-if新作用域中，重新定义了父作用域的变量，那么此变量将不受父作用域影响，也不影响父作用域
- ng-if与ng-show、ng-hide的区别
    + ng-if 没有创建DOM元素，直到值为true的时候才创建
    + ng-show/ng-hide 创建DOM元素，通过display="block/none"控制元素是否.显示