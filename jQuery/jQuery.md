
# 核心
### jQuery 核心函数
##### jQuery(selector,[context])
* selector: 选择器
* context: 上下文

##### jQuery(html,[props])
* html: 标签字符串(最好写单标签，发现写双标签上去属性添加不上)
* props：要给创建标签添加的属性或事件{"class":".cl","click",function(){}}对象

##### jQuery(callback)
* 相当于：jQuery(document).ready(callback)

##### jQuery.holdReady(hold)
* hold:true/false; true  代表暂停，false 代表恢复

> 多个holds放在ready事件中，holdReady(true)逐一执行，ready事件将不会执行，
直到所有已发布了相应的一个$.holdReady(false) 和正常的文件准备好条件得到满足。

```
$.holdReady(true);
$.getScript("myplugin.js", function() {
     $.holdReady(false);
});
```

### jQuery 对象访问

##### each(callback)
* callback: function(i,item){}

> 对jQuery对象里的每个DOM元素都执行callback，函数内this指向一个此DOM元素

> 返回false终止循环，返回true想当于continue；

##### size()
> 返回当前jQuery对象中匹配的DOM元素个数

##### length  属性
> 和size() 方法一样，返回匹配的DOM元素个数

##### selector  属性
> 返回传给jQuery() 的原始选择器

` $("div#foo ul:not([class])").selector `   结果：div#foo ul:not([class])

##### context  属性
> 返回传给jQuery()的原始的DOM节点内容，即是jQuery()的第二个参数，（上下文），没有指定，则指向document

> 和selector配合使用，对插件开发人员非常有用

##### get([index])
> 取得所有匹配的DOM元素集合(数组集合)，如传入index，则取得相应位置上的DOM元素（单个DOM元素）

##### index([selector | element])
> 如果不给 .index() 方法传递参数，那么返回值就是这个jQuery对象集合中第一个元素相对于其同辈元素的位置。

> 如果参数是一组DOM元素或者jQuery对象，那么返回值就是传递的元素相对于原先集合的位置。

> 如果参数是一个选择器，那么返回值就是原先元素相对于选择器匹配元素中的位置。如果找不到匹配的元素，则返回-1。
```
 <li id="foo">foo</li>
  <li id="bar">bar</li>
  <li id="baz">baz</li>


$('li').index(document.getElementById('bar')); //1，传递一个DOM对象，返回这个对象在原先集合中的索引位置
$('li').index($('#bar')); //1，传递一个jQuery对象
$('li').index($('li:gt(0)')); //1，传递一组jQuery对象，返回这个对象中第一个元素在原先集合中的索引位置


$('#bar').index('li'); //1，传递一个选择器，返回#bar在所有li中的做引位置
$('#bar').index(); //1，不传递参数，返回这个元素在同辈中的索引位置。

```


### 数据缓存
##### data([key],[value])
* key: 在dom上添加的key, 仅设置key不设置value表示获取
* value：key对应的值    (存在多个DOM，则全部添加)

##### removeData([name]|list)
* name: 需要移除的key名字
* list：key组成的数组，或者是多个key以空格分开的字符串


### 队列控制
##### queue(e,[q])

##### dequeue([queueName])

##### cleaerQueue([queueName])

### 插件机制
##### jQuery.fn.extend(object)
##### jQuery.extend(object)

### 多库共存
##### jQuery.noConflict([ex])
* 在引入jQuery后调用
```
//创建别名
var j = jQuery.noConflict();
j("div").hide()
```
```
//完全将jQuery移到一个新的命名空间
var dom = {};
dom.query = jQuery.noConflict(true);
```
```
//仍然想使用jQuery
(function($){
    $("div")

})(jQuery)
```


# 属性
### 属性

##### attr(name|pro|key,value|fn)
* name: 仅设置name代表获取第一个DOM的该属性的值
* pro："名/值"的对象
    * {key:value,key:value}
    * {key:fn,key:fn}

* key,val
* key,fn
##### removeAttr(name)
* name: 需要删除的属性名，删除多个属性用空格隔开多个属性名，不支持数组形式

##### prop(name|pro|key,value|fn)
> 用于获取或设置元素的内置属性，比如：input多选框的checked等，如果用attr可能不起效果,用法和attr一样
> 对于获取属性，和attr不同的是，比如获取checked的值，prop获取的是true/false,attr获取的是checked/undefined
* name: 仅设置name代表获取第一个DOM的该属性的值
* pro："名/值"的对象
    * {key:value,key:value}
    * {key:fn,key:fn}

* key,val
* key,fn

##### removeProp(name)
> 实验中，此属性和removeAttr不同，仅接受一个参数名，而且两边不能有空格
* name: 需要删除的属性名
### CSS类
##### addClass(class|fn)
* class:类名，多个类名可用空格分开
* fn: function(index,class)
    * index: jQuery中DOM元素的索引值
    * class：jQuery中DOM元素的原始类
    > 增加的类名为函数的返回值，可多个类，用空格分开，不会影响原始类，只会增加
    > 对于每个DOM元素都会执行函数


##### removeClass([class|fn])
> 和addClass用法一样，但函数返回值为需要删除的元素

##### toggleClass(class|fn[,sw])
* class:  类名，切换
* class,switch:
    * class 为类名
    * switch 用于决定元素是否包含class的布尔值,为true时，元素包含有class类，为false时，不包含，这里通常是一个条件
* fn,[switch]:
    * function(index,class,switch){}
        * index: DOM索引
        * class: DOM的原始类
        * switch：此值与下面的参数值相同，也就是可以获取此时switch的值
    * switch: 为boolean值，true时，添加类，false移除类
    > switch参数可选

### HTML代码/文本/值
##### html([val|fn])
##### text([val|fn])
##### val([val|fn|arr])



















