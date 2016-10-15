# seajs

### ˵��
1. CMD�淶��������

### ����ģ��

```
define(function(require,exports,module){
    function add(x,y){
    return x+y;
    }

    exports.add = add;  //��¶����һ
    module.exports.add = add; // ��¶������
    module.exports = function(){}
})

```

### ʹ�ò���
1. ��html����sea.js `<script src="sea.js"></script>`
2. ����ģ��
3. ʹ��ģ��
```
    <script>
        seajs.use('./calcmodules/add.js',function(obj){
            var res = obj.add(1,3);  //obj��ʵ����add.js�е�exports����
            alert(res);
        }
    </script>
```
4. seajs.config({}) (�Ǳ���)
```

seajs.config({
    base:"./calcmodules/",  //�趨һ��ͳһ�Ļ���·������seajs.use()��ʱ��ʡ��
    alias:{ 'jquery': 'jquery/jquery/1.10.1/jquery' }            //��ģ�������·��ȡһ��������������seajs.use()��require()����������ʹ�ñ������������·������ģ�����
})

```

5. ���ģ������һ���ļ�
```
define(function(require,exports,module){
	//1.0 ����require�ؼ��ֵ�����Ҫ��ģ��
	var addObj = require('./add.js');
	console.log(addObj.add(2,3));

	// var substracObj = require('./substract.js');
	var substracObj = require('jianfa');
	console.log(substracObj.substract(4,3));

	//2.0 ��add��substract�е����з������س�ȥ
	exports.add = addObj.add;
	exports.substract = substracObj.substract;

});
```
### ע������
1. ����ģ���·������ж��������[]���а���
2. �ص�����������������ģ�����ݵĸ�������һ�£�˳��Ҳ����һ��


# requirejs
### ˵��
1. AMD�淶 Ԥ����
2. ����ͬʱʹ��sea��require

2. ����ģ���seajsһ��
3. ʹ�ã� `require(["ģ��"],fn(obj))`   //ע���һ������������������ʽ���ڶ����Ǻ���������������˳���Ӧģ��