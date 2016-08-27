
<style>
.red{
    color:red;
}
hr{
    color：red;
    background:red;
}
h1{

  color:green;
}
h3{
  color:orange;
 }

</style>



# 定位 Position
### position: `static`  | relative | absolute | fixed

> 设置对象的定位方式
```css
position:relative;
```




### z-index：`auto` | &lt;integer&gt;
> 设置对象的层叠顺序
```
z-index:999;
```
+ position设置为非static可用




### top:`auto` | &lt;length> | &lt;percentage>
>设置定位偏移位置
```css
top:20px;
```



### right:`auto` | &lt;length> | &lt;percentage>
>设置定位偏移位置
```css
right:10%;
```



### bottom:`auto` | &lt;length> | &lt;percentage>
>设置定位偏移位置
```css
top:20px;
```



### left:`auto` | &lt;length> | &lt;percentage>
>设置定位偏移位置
```css
top:20px;
```

### clip: `auto` | rect(top,right,bottom,left)
> 设置对象的可视区域，区域外是透明的，只适用于绝对定位元素(position:absolute;)
* 属性将被抛弃，推荐使用clip-path
```css
/*top：不剪切   right：从100px开始剪至右边  bottom：从100px开始剪至底部  left：从左边剪至20px处*/
clip:rect(auto,100px,100px,20px);
```

***
# 布局 Layout
### display：`inline`  | block | inline-block
> 设置对象是否及如何显示
* IE6 7支持inline元素转换成inline-block，但不支持block元素转换成inline-block。所以非inline元素在IE6 7下转换成inline
  ，然后hasLayout，以此获得和inline-block类似的效果
```css
div{
    display:inline-block;
    *display:inline;
    *zoom:1;
```


### float: `none` | left | right
> 设置对象是否及如何浮动
* 对应脚本：styleFloat(IE)或cssFloat(非IE)
```css
float:left;
```

### clear `none` | left | right | both
> 该属性指出不允许有浮动对象的边
```css
clear:both;
```

### visibility: `visible` | hidden | collapse
> 设置是否显示对象。与display属性不同，此属性为隐藏的对象保留其占据的物理空间
> 参数说明
* collapse：主要用隐藏表格的行或列。隐藏的行或列能够被其他内容使用。对于表格外的其他对象，其作用相当于hidden
* IE6不支持collapse
```css
visibility:hidden;
```

### overflow: `visible` | hidden | scroll | auto
> 设置对象处理溢出内容的方式
```css
overflow:scroll;
```


### overflow-x: `visible` | hidden | scroll | auto
> 设置对象处理横向溢出内容的方式
```css
overflow-x:scroll;
```


### overflow-y: `visible` | hidden | scroll | auto
> 设置对象处理纵向溢出内容的方式
```css
overflow-y:scroll;
```

# 尺寸 Dimension
### width:`auto` | &lt;length&gt; | &lt;pencentage&gt;
> 设置对象的宽度
* 对于img对象来说，仅指定此属性，其height值将根据图片源尺寸等比例缩放
```css
width:100px;
width:100%;
```

### min-width:`0` | &lt;length&gt; | &lt;pencentage&gt;
> 设置对象的最小宽度
* 如果min-width的值大于max-width的值，两值会自动交换
* IE6不支持
```css
min-width:100px;
min-width:100%;
```

### max-width:`none` | &lt;length&gt; | &lt;pencentage&gt;
> 设置对象的最小宽度
* 如果max-width的值小于min-width的值，两值会自动交换
* IE6不支持
```css
max-width:100px;
max-width:100%;
```


### height:`auto` | &lt;length&gt; | &lt;pencentage&gt;
> 设置对象的宽度
* 对于img对象来说，仅指定此属性，其width值将根据图片源尺寸等比例缩放
```css
height:100px;
height:100%;
```

### min-height:`0` | &lt;length&gt; | &lt;pencentage&gt;
> 设置对象的最小宽度
* 如果min-height的值大于max-height的值，两值会自动交换
* IE6不支持
```css
min-height:100px;
min-height:100%;
```

### max-height:`none` | &lt;length&gt; | &lt;pencentage&gt;
> 设置对象的最小宽度
* 如果max-height的值小于min-height的值，两值会自动交换
* IE6不支持
```css
max-height:100px;
max-height:100%;
```

# 外补白 Margin

### margin: [&lt;legnth&gt; | &lt;percentage&gt; | auto]{1,4}
> 设置对象四边的外延边距,允许负值
* 四个值顺序：上、右、下、左
* 外延边距始终透明
> 相关属性：
* margin-top：`0`
* margin-right：`0`
* margin-bottom：`0`
* margin-left：`0`

```
margin:0 auto;
```

# 内补白 Padding
### padding: [&lt;legnth&gt; | &lt;percentage&gt; | auto]{1,4}
> 设置对象四边的内部边距,不允许负值
* 四个值顺序：上、右、下、左
* 内部边距会填充背景及颜色
> 相关属性：
* padding-top：`0`
* padding-right：`0`
* padding-bottom：`0`
* padding-left：`0`

```
padding:10px;
```

# 边框 Border
### border ：&lt;line-width&gt; || &lt;line-style&gt; || &lt;color&gt;
> 参数说明：宽度   样式   颜色
* &lt;line-width&gt;： &lt;length&gt; | thin | medium | thick
* &lt;line-style&gt;: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
* &lt;color&gt;
> 相关属性
* border-top:
* border-right:
* border-bottom:
* border-left:
> 设置单个参数属性，其他参数默认将无条件覆盖各自对应的单个属性设置
```
border:1px solid #ccc;
```

### border-width： &lt;line-width&gt;{1,4}
> 定义边框宽度，不允许负值
* 如果border-style设置为none或hidden，border-width的值将为0；
> 相关属性
* border-top-width:
* border-right-width:
* border-bottom-width:
* border-left-width:
```
border-top-width:1px;
```

### border-style： &lt;line-style&gt;{1,4}
> 定义边框样式
* 如果border-style设置为none或hidden，border-width的值将为0；
> 相关属性
* border-top-style:
* border-right-style:
* border-bottom-style:
* border-left-style:
> 取值
* none: 无轮廓。border-color将被忽略，border-width计算值为0，除非边框轮廓为图像，即border-image
* hidden: 隐藏边框，IE7及以下不支持
* dotted：点状轮廓。IE6显示为dashed效果
* dashed: 虚线轮廓
* solid: 实线轮廓
* double: 双线轮廓
* groove: 3D凹槽轮廓。
* ridge: 3D凸槽轮廓。
* inset: 3D凹边轮廓。
* outset: 3D凸边轮廓。

```
border-top-style:solid;
```

### border-color： &lt;color&gt;{1,4}
> 定义边框颜色，不允许负值
* IE6：不支持transparent
* IE6-8：不支持RGBA,HSL,HSLA
> 相关属性
* border-top-color:
* border-right-color:
* border-bottom-color:
* border-left-color:
```
border-top-width:1px;
```

### border-radius: [ &lt;length&gt; | &lt;percentage&gt; ]{1,4} [ / [ &lt;length&gt; | &lt;percentage&gt; ]{1,4} ]?

> 设置或检索对象使用圆角边框。提供2个参数，2个参数以“/”分隔，每个参数允许设置1~4个参数值，
第1个参数表示水平半径，第2个参数表示垂直半径，如第2个参数省略，则默认等于第1个参数
* IE6-8不支持
* 4 个值的顺序分别是：左上、右上、右下、左下
```
border-radius:10px/20px;  //表示4 个角横向半径为10px，纵向半径为20px；
```
> 相关属性

>> 设置或检索对象的左上角圆角边框。提供2个参数，2个参数以空格分隔，每个参数允许设置1个参数值，
第1个参数表示水平半径，第2个参数表示垂直半径，如第2个参数省略，则默认等于第1个参数

* border-top-left-radius：[ &lt;length&gt; | &lt;percentage&gt; ]{1,2}
* border-top-right-radius：[ &lt;length&gt; | &lt;percentage&gt; ]{1,2}
* border-bottom-right-radius：[ &lt;length&gt; | &lt;percentage&gt; ]{1,2}
* border-bottom-left-radius：[ &lt;length&gt; | &lt;percentage&gt; ]{1,2}
```
border-top-left-radius：10px 20px;
```

### box-shadow: `none`  |   inset?  &lt;length&gt;{2,4} &lt;color&gt;?
> 参数说明

* none: 无阴影
* inset：设置对象阴影类型为内阴影，该值为空时，为外阴影
* 第一个长度：设置对象的阴影水平偏移值，可以为负值
* 第二个长度：设置对象的阴影垂直偏移值，可以为负值
* 第三个长度：设置对象的阴影模糊值，不允许为负数（可省略）
* 第四个长度：设置对象的阴影外延值，可以为负值（可省略）
* color: 设置对象的阴影颜色
> 可以设置多组效果，组之间用逗号隔开
效果为：多组效果都有，但是先设置的效果会在最上面显示

```
box-shadow:10px 10px;
box-shadow: inset 10px 10px 2px 2px red;
box-shadow:  10px 10px 2px 2px red,15px 15px 2px 2px blue;//效果为10px红色右下边+5px蓝色右下边

```

### border-image:：&lt;' border-image-source '&gt; || &lt;' border-image-slice '&gt; [ / &lt;' border-image-width '&gt; | / &lt;' border-image-width '&gt;? / &lt;' border-image-outset '&gt; ]? || &lt;' border-image-repeat '&gt;
> &lt;' border-image-source '&gt; : `none` | &lt;image&gt;设置或检索对象的边框是否用图像定义样式或图像来源路径。

> &lt;' border-image-slice '&gt;：[ &lt;number&gt; | &lt;percentage&gt; ]{1,4}   fill?  设置或检索对象的边框背景图的分割方式。

> &lt;' border-image-width '&gt; : `1` | ：[ &lt;length&gt; | &lt;percentage&gt; | &lt;number&gt; | auto ]{1,4} 设置或检索对象的边框厚度。

> &lt;' border-image-outset '&gt;：[ &lt;length&gt; | &lt;number&gt; ]{1,4} 设置或检索对象的边框背景图的扩展。

> &lt;' border-image-repeat '&gt;：[ stretch | repeat | round | space ]{1,2}

* stretch： 指定用拉伸方式来填充边框背景图。
* repeat： 指定用平铺方式来填充边框背景图。当图片碰到边界时，如果超过则被截断。
* round： 指定用平铺方式来填充边框背景图。图片会根据边框的尺寸动态调整图片的大小直至正好可以铺满整个边框。
* space： 指定用平铺方式来填充边框背景图。图片会根据边框的尺寸动态调整图片的之间的间距直至正好可以铺满整个边框。

>设置或检索对象的边框图像的平铺方式。

> IE6-10 不支持

> 参数说明：注意：修改一下各属性均不影响布局，不影响原box的边框，大小等
* border-image-source:图片地址
* border-image-slice：1到4 个长度+fill 分别将剪切图片上右下左宽度，fill代表填充内部
* border-image-width：以多少宽度承载图片边框，此属性不影响实际图片边框宽度，但效果会显示出来,4个边的值可选，一个值影响全部
* border-image-outset: 图片背景图的扩展，4 个长度可选，对应上右下左，注意：遵从一个影响全部，两个影响上下、左右原则
* border-image-repeat：图片的平铺方式

```
border-image:url(sky.png) 10/10px;
border-image:url(sky.png) 10 20 30 40  fill /10px 20px 30px 40px/10px 20px 30px 40px  repeat;
//参数表示：   图片四边的剪切   内部填充   图片4边显示的厚度   图片四边向外扩展多少距离再显示   图片显示方式
```

### background: image || position /bg-size || repeat-style || attachment ||  &lt;box&gt;  &lt;box&gt;
> 复合属性。检索或设置对象的背景特性（背景色 <' background-color '> 不能设置多组）。
* <' background-image '>： 指定对象的背景图像。可以是真实图片路径或使用渐变创建的“背景图像”
    * none
    * &lt;image&gt;
* <' background-position '>： 指定对象的背景图像位置。基于背景图，两个值，如果传一个值，用于横坐标，纵坐标为50%，center可为一个
    * `0% 0%` 等同于 `left top`
    * [ left | center | right | top | bottom | <percentage> | <length> ]
* <' background-size '>： 指定对象的背景图像的尺寸大小。
    * `auto`   [ <length> | <percentage> | auto ]{1,2} | cover | contain
    * IE6-8不支持此属性
    * cover： 将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器。
    * contain： 将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内。
* <' background-repeat '>： 指定对象的背景图像如何铺排填充。
* <' background-attachment '>： 指定对象的背景图像是随对象内容滚动还是固定的。
    * fixed： 背景图像相对于窗体固定。
    * `scroll`： 背景图像相对于元素固定，也就是说当元素内容滚动时背景图像不会跟着滚动，因为背景图像总是要跟着元素本身。但会随元素的祖先元素或窗体一起滚动。
    * local： 背景图像相对于元素内容固定，也就是说当元素随元素滚动时背景图像也会跟着滚动，因为背景图像总是要跟着内容。（CSS3）
    * IE6-8: 不支持local属性
* <' background-origin '>： 指定对象的背景图像显示的原点。
    * `padding-box`： 从padding区域（含padding）开始显示背景图像。
    * border-box： 从border区域（含border）开始显示背景图像。
    * content-box： 从content区域开始显示背景图像。
    * IE6-8: 不支持此属性
* <' background-clip '>： 指定对象的背景图像向外裁剪的区域。
    * padding-box： 从padding区域（不含padding）开始向外裁剪背景。
    * border-box： 从border区域（不含border）开始向外裁剪背景。
    * content-box： 从content区域开始向外裁剪背景。
    * text： 从前景内容的形状（比如文字）作为裁剪区域向外裁剪，如此即可实现使用背景作为填充色之类的遮罩效果。遮罩效果
    * IE6-11：不支持text属性
* <' background-color '>： 指定对象的背景颜色。
    * `transparent`
```
//缩写方式
background:url(test1.jpg) no-repeat scroll 10px 20px/50px 60px content-box padding-box,
	   url(test1.jpg) no-repeat scroll 10px 20px/70px 90px content-box padding-box,
	   url(test1.jpg) no-repeat scroll 10px 20px/110px 130px content-box padding-box #aaa;
	  // 注意， <' background-color '> 只能设置一次，且由于写在前面的背景会叠在之后的背景之上，所以背景色通常都定义在最后一组上，避免背景色将图像盖住。


```
```
//拆分方式
background-image:url(test1.jpg),url(test2.jpg),url(test3.jpg);
background-repeat:no-repeat,no-repeat,no-repeat;
background-attachment:scroll,scroll,scroll;
background-position:10px 20px,10px 20px,10px 20px;
background-size:50px 60px,70px 90px,110px 130px;
background-origin:content-box,content-box,content-box;
background-clip:padding-box,padding-box,padding-box;
background-color:#aaa
```

```
//多背景下，多个图片，而其他属性只有一个参数值（缩写方式）
background-image:url(test1.jpg),url(test2.jpg),url(test3.jpg);
background-repeat:no-repeat;
background-attachment:scroll;
background-position:10px 20px;
background-size:50px 60px,70px 90px,110px 130px;
background-origin:content-box;
background-clip:padding-box;
background-color:#aaa;
```
```
//如果定义了多个背景图片，而 <' background-origin '> 和 <' background-clip '> 设置了相同的值。可这样缩写：
background:url(test1.jpg) no-repeat scroll 10px 20px/50px 60px padding-box,
	   url(test1.jpg) no-repeat scroll 10px 20px/70px 90px padding-box,
	   url(test1.jpg) no-repeat scroll 10px 20px/110px 130px padding-box #aaa;
```
# 颜色 Color
### color：设置对象的文本颜色 ，无默认值
```
color: red;
```
### opacity: `1` || &lt;number&gt;
* 取值范围 0~1
* IE8及其以下：filter: alpha(opacity=50) 取值0~100
* 尽量少用此属性，会将文本及其他元素也透明化，如要避免此则用rgba进行操作
```
div{filter:alpha(opacity=50);} /* for IE8 and earlier */
div{opacity:.5;} /* for IE9 and other browsers */
```

# 字体 Font
### font：style || variant || weight ||font-size/line-height  font-family | caption | icon | menu | message-box | small-caption | status-bar
* 参数顺序必须有序，而且合写情况下，font-size和font-family是必须的。
> 参数说明
* <' font-style '>： 指定文本字体样式
    * `normal`： 指定文本字体样式为正常的字体
    * italic： 指定文本字体样式为斜体。对于没有设计斜体的特殊字体，如果要使用斜体外观将应用oblique
    * oblique： 指定文本字体样式为倾斜的字体。人为的使文字倾斜，而不是去选取字体中的斜体字
* <' font-variant '>： 指定文本是否为小型的大写字母
    * `normal` 正常的字体
    * small-caps：小型的大写字母字体
* <' font-weight '>： 指定文本字体的粗细
    * `normal`： 正常的字体。相当于数字值400
    * bold： 粗体。相当于数字值700。
    * bolder： 定义比继承值更重的值
    * lighter： 定义比继承值更轻的值
    * &lt;integer&gt;： 用数字表示文本字体粗细。取值范围：100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
* <' font-size '>： 指定文本字体尺寸
    * xx-small | x-small | small | `medium` | large | x-large | xx-large
    * smaller | larger
    * &lt;length&gt; 长度单位
    * &lt;percentage&gt; 百分比，相对于父元素的字体尺寸


* <' line-height '>： 指定文本字体的行高
    * normal： 允许内容顶开或溢出指定的容器边界。
    * &lt;length&gt;： 用长度值指定行高。不允许负值。
    * &lt;percentage&gt;： 用百分比指定行高，其百分比取值是基于字体的高度尺寸。不允许负值。
    * &lt;number&gt;： 用乘积因子指定行高。不允许负值。
* <' font-family '>： 指定文本使用某个字体或字体序列
    * 字体名称。按优先顺序排列。以逗号隔开。如果字体名称包含空格或中文，则应使用引号括起


* caption： 使用有标题的系统控件的文本字体（如按钮，菜单等）（CSS2）
* icon： 使用图标标签的字体（CSS2）
* menu： 使用菜单的字体（CSS2）
* message-box： 使用信息对话框的文本字体（CSS2）
* small-caption： 使用小控件的字体（CSS2）
* status-bar： 使用窗口状态栏的字体（CSS2）

```
p{font:italic small-caps bold 18px Simsun,arial,sans-serif;}

```
```
.icon p{font:icon;}
```

# 文本 Text
### text-transform: `none`` | capitalize | uppercase | lowercase
> 检索或设置对象中的文本的大小写。
* none： 无转换
* capitalize： 将每个单词的第一个字母转换成大写
* uppercase： 将每个单词转换成大写
* lowercase： 将每个单词转换成小写
```
span{text-transform:lowercase;}

```

### white-space：`normal` | pre | nowrap | pre-wrap | pre-line
> 设置或检索对象内空格的处理方式。
* normal： 默认处理方式。
* pre： 用等宽字体显示预先格式化的文本，不合并文字间的空白距离，当文字超出边界时不换行。可查阅pre对象
* nowrap： 强制在同一行内显示所有文本，合并文本间的多余空白，直到文本结束或者遭遇br对象。
* pre-wrap： 用等宽字体显示预先格式化的文本，不合并文字间的空白距离，当文字碰到边界时发生换行。
* pre-line： 保持文本的换行，不保留文字间的空白距离，当文字碰到边界时发生换行。
* IE6-7:不支持pre-wrap 和pre-line

```
p{word-wrap:normal;}

```

### word-break：`normal` | keep-all | break-all
> 设置或检索对象内文本的字内换行行为
* normal： 依照亚洲语言和非亚洲语言的文本规则，允许在字内换行。
* keep-all： 与所有非亚洲语言的normal相同。对于中文，韩文，日文，不允许字断开。适合包含少量亚洲文本的非亚洲文本。
* break-all： 该行为与亚洲语言的normal相同。也允许非亚洲语言文本行的任意字内断开。该值适合包含一些非亚洲文本的亚洲文本，比如使连续的英文字母间断行。
* keep-all 有严重兼容性，不要使用

### word-wrap：`normal` | break-word
> 设置或检索当内容超过指定容器的边界时是否断行
* normal： 允许内容顶开或溢出指定的容器边界。
* break-word： 内容将在边界内换行。如果需要，单词内部允许断行。

### text-align：`start` | end | left | right | center | justify | match-parent | justify-all
> 设置或检索对象中内容的水平对齐方式。
* left： 内容左对齐。
* center： 内容居中对齐。
* right： 内容右对齐。

### word-spacing：normal | &lt;length&gt;
* `normal` :  默认间隔
* &lt;length&gt;:用长度值指定间隔。可以为负值。
> 检索或设置对象中的单词之间的最小，最大和最佳间隙。

### letter-spacing：normal | &lt;length&gt;
* `normal` :  默认间隔
* &lt;length&gt;:用长度值指定间隔。可以为负值。
> 检索或设置对象中的字符之间的最小，最大和最佳间隙。

### text-indent :`0` &lt;legnth&gt; | &lt;percentage&gt;
> 检索或设置对象中的文本的缩进。可以为负值
```
div{text-indent:2em}

```

### vertical-align：`baseline` | sub | super | top | text-top | middle | bottom | text-bottom | &lt;percentage&gt; | &lt;length&gt;
> 设置或检索`内联元素`在行框内的垂直对其方式。

* baseline： 将支持valign特性的对象的内容与基线对齐
* sub： 垂直对齐文本的下标
* super： 垂直对齐文本的上标
* top： 将支持valign特性的对象的内容与对象顶端对齐
* text-top： 将支持valign特性的对象的文本与对象顶端对齐
* middle： 将支持valign特性的对象的内容与对象中部对齐
* bottom： 将支持valign特性的对象的文本与对象底端对齐
* text-bottom： 将支持valign特性的对象的文本与对象顶端对齐
* &lt;percentage&gt;： 用百分比指定由基线算起的偏移量。可以为负值。基线对于百分数来说就是0%。
* &lt;length&gt;： 用长度值指定由基线算起的偏移量。可以为负值。基线对于数值来说为0。（CSS2）

### line-height：normal | &lt;length&gt; | &lt;percentage&gt; | &lt;number&gt;
> 检索或设置对象的行高。即字体最底端与字体内部顶端之间的距离。
* normal: 允许内容顶开或溢出指定的容器边界
* &lt;length&gt;: 用长度值指定行高。不允许负值。
* &lt;percentage&gt; :  用百分比指定行高，其百分比取值是基于字体的高度尺寸。不允许负值。
* &lt;number&gt; : 用乘积因子指定行高。不允许负值。

### text-decoration : none | underline | overline | line-through | blink
> 复合属性。检索或设置对象中的文本的装饰。 可设置多个属性值

### text-shadow：`none` | &lt;shadow&gt;
> 设置或检索对象中文本的文字是否有阴影及模糊效果。可设置多组效果，用逗号隔开
> IE 6-9 不支持
* none： 无阴影
* &lt;length&gt;①： 第1个长度值用来设置对象的阴影水平偏移值。可以为负值
* &lt;length&gt;②： 第2个长度值用来设置对象的阴影垂直偏移值。可以为负值
* &lt;length&gt;③： 如果提供了第3个长度值则用来设置对象的阴影模糊值。不允许负值
* &lt;color&gt; :设置对象的阴影的颜色。

```
p{text-shadow:1px 1px rgba(0,0,0,.3);}
```
# 书写模式 Writting Modes
### direction：ltr | rtl
> 检索或设置文本流的方向。
* ltr： 文本流从左到右。
* rtl： 文本流从右到左。

# 









