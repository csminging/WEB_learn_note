
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
* <' background-clip '>： 指定对象的背景图像向外裁剪的区域。
    * padding-box： 从padding区域（不含padding）开始向外裁剪背景。
    * border-box： 从border区域（不含border）开始向外裁剪背景。
    * content-box： 从content区域开始向外裁剪背景。
    * text： 从前景内容的形状（比如文字）作为裁剪区域向外裁剪，如此即可实现使用背景作为填充色之类的遮罩效果。遮罩效果
* <' background-color '>： 指定对象的背景颜色。
    * `transparent`