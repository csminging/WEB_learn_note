
<style>
```css
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
```
</style>

* 任何可以被递归定义的函数，都可以改写为迭代式的程序
* Array.isArray(arr)判断是否为数组



# 数组  Array

## 迭代方法：

### arr.forEach(function(item,index,arr){})

> ：对数组中的每一项运行给定函数。这个方法没有返回值。不改变原数组



> IE9+支持

```javascript
var arr = [1,2,3];
function fn(num){
  console.log(2*num)
}
arr.forEach(fn)  //结果打印2,4,6
```

###  arr.every(function(item,index,arr){})

>  对数组中的每一项运行给定函数，如果该函数对每一项都返回 true，则返回 true。



> IE9+支持

```javascript
var arr =[2,3,4];    //每一项执行all函数均返回true，every才返回true；
function fn(num){
  return (num>1);
}
var flag = arr.every(fn);
console.log(flag)   //true;
```

### arr. some(function(item,index,arr){})

> 对数组中的每一项运行给定函数，如果该函数对任一项返回 true，则返回 true。



> IE9+支持

```javascript
var arr =[2,3,4];    //有一项执行all函数均返回true，every就返回true；
function fn(num){
  return (num>3);
}
var flag = arr.some(fn);
console.log(flag)   //true;
```

### arr.map(function(item,index,arr){})

> 对数组中的每一项运行给定函数，返回每次函数调用的结果组成的新数组。不改变原数组



> IE9+支持

```javascript
var arr =[2,3,4];  
 function fn(num,i){
	 return (num*i);
 }
 var arr1 = arr.map(fn);
 console.log(arr1)   //[0,3,8]
```

### arr.filter(function(item,index,arr){})

>对数组中的每一项运行给定函数，返回该函数会返回 true 的项组成的新数组。不改变原数组



>IE9+支持

```javascript
var arr =[2,3,4];    
 function fn(num){  
	 return (num>2);
 }
 var arr1 = arr.filter(fn);
 console.log(arr1)   //[3,4]
```

## 归并方法
### arr.reduce(function(prev,cur,index,arr){})
> 迭代数组的所有项，然后构建一个最终返回的值。从第一项开始往后遍历



> IE9+支持



> 参数说明：
* prev： 运行函数所得的前一个返回值；
* cur:   运行函数所得的当前值；
* index：数组索引；
* arr:   数组对象引用

```javascript
var arr = [1,2,3,4,5];
var sum = arr.reduce(function(prev,cur,index,arr){
    return prev+cur; //比如说当前cur为4的时候，即索引运行到3.prev为1+2+3=6的值
});
console.log(sum); //15
```
### arr.reduceRight(function(prev,cur,index,arr){})
> 迭代数组的所有项，然后构建一个最终返回的值。从最后一项起往前遍历。


> 和reduce()不同的是遍历顺序


> IE9+支持

# 模拟列表类
* listSize     储存列表元素个数
* pos          列表的当前位置
* length()     返回列表中的元素的个数
* clear()      清空列表的所以元素
* toString()   返回列表的字符串形式
* getElement() 返回当前位置的元素
* insert()     在现有元素后插入新元素
* append()     在列表的末尾添加新元素
* remove()     从列表中删除元素


>迭代器方法
* front()      将列表的当前位置设移动到第一个元素
* end()        将列表的当前位置移动到最后一个元素
* prev()       将当前位置后移一位
* next()       将当前位置前移一位
* currPos()    返回列表的当前位置
* moveTo()     将当前位置移动到指定位置
> 使用迭代器方法的优点
* 访问列表元素时不必关心底层的数据存储结构。
* 当为列表添加一个元素时，索引的值就不对了，此时只用更新列表，而不用更新迭代器
* 可以用不同类型的数据存储方式实现• cList 类，迭代器为访问列表里的元素提供了一种统一的方式。
* 但是迭代器只是用来在列表上随意移动，而不应该和任何为列表增加或删除元素的方法一起使用。
```javascript
<script>
    function List() {
        this.listSize =0;  //存放列表元素数量
        this.pos =0;
        this.dataStore = []; //存放列表元素
    }

    //给列表添加元素
    List.prototype.append = function(element) {
        this.dataStore[this.listSize++] = element;
    };

    //在列表中查找某一元素
    List.prototype.find = function(element) {
        for(var i =0;i<this.dataStore.length;i++) {
            if(this.dataStore[i]==element) {
                return i
            }
        }
        return -1;
    };
    //从列表中删除元素
    List.prototype.remove = function(element) {
        var foundAt = this.find(element);
        if(foundAt>-1) {
            this.dataStore.splice(foundAt, 1);
            this.listSize--;
            return true;
        }
        return false;
    };
    //返回列表元素个数
    List.prototype.length = function() {
        return this.listSize;
    };
    //显示列表中的元素
    List.prototype.toString = function() {
        return this.dataStore;
    };
    //向列表中插入一个元素,插入到指定元素后面
    List.prototype.insert = function(element,after) {
        var insertPos = this.find(after);
        if(insertPos>-1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            this.listSize++;
            return true;

        }
        return false;

    };
    //情况列表中所有的元素
    List.prototype.clear =function() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos =0;
    };
    //判断给定值是否在列表中
    List.prototype.contains = function(element) {
        for (var i = 0; i < this.dataStore.length;i++) {
            if(this.dataStore[i]==element){
                return true;
            }
        }
        return false;
    };

    //以下为遍历列表方法。迭代器
    List.prototype.front = function() {
        this.pos =0;
    };
    List.prototype.end = function() {
        this.pos = this.listSize-1;
    };
    List.prototype.prev = function() {
        if(this.pos>0) {
            this.pos--;
        }
    };
    List.prototype.next = function() {
        if(this.pos<this.listSize-1) {
            ++this.pos;
        }
    };
    List.prototype.currPos = function () {
        return this.pos;
    };
    List.prototype.moveTo = function(position) {
        this.pos = position;
    };
    List.prototype.getElement = function () {
        return this.dataStore[this.pos];
    };



    //测试
    var names = new List();
    names.append("Clayton");
    names.append("Raymond");
    names.append("Cynthia");
    names.append("Jennifer");
    names.append("Bryan");
    names.append("Danny");

    names.moveTo(1);
    names.insert("ming","Clayton")
    console.log(names.getElement());
</script>
```

# 模拟栈的实现
* dataStore   储存栈元素的数组属性
* top         储存栈顶的指向，初始为0
* push()      向栈推入一个元素
* pop()       栈推出一个元素
* peek()      查找栈顶元素
* length()    返回栈长度
* clear()     清空栈

```javascript
<script>
    function Stack() {
        this.dataStore = [];
        this.top = 0;

    }

    Stack.prototype.push = function(element) {
        this.dataStore[this.top++] = element;
    };
    Stack.prototype.pop = function() {
        return this.dataStore[--this.top];
    };
    Stack.prototype.peek = function () {
        return this.dataStore[this.top-1]; //如果栈为空，那么this.dataStore[-1] =undefined。并不报错
    };
    Stack.prototype.length = function() {
        return this.top;
    };
    Stack.prototype.clear = function () {
        this.top =0;
    };

    var s = new Stack();
    s.push(11);
    s.push(23);
    console.log(s.peek());

</script>
```
# 模拟队列的实现
* dataStore 储存队列元素的数组属性
* enqueue() 向队列尾部添加元素
* dequeue() 删除队列开头元素
* front()   返回队列开头元素
* back()    返回队列尾部元素
* toString()显示队列内的所有元素
* empty()   判断队列是否为空
* count()   返回队列长度
```javascript
<script>
    function Queue() {
        this.dataStore = [];
    }

    Queue.prototype.enqueue = function(element) {
        this.dataStore.push(element)
    };
    Queue.prototype.dequeue = function() {
        return this.dataStore.shift();
    };
    Queue.prototype.front=function() {
        return this.dataStore[0];
    }
    Queue.prototype.back=function() {
        return this.dataStore[this.dataStore.length-1];
    }
    Queue.prototype.toString = function() {
        var retStr = "";
        for(var i =0;i<this.dataStore.length;i++) {
            retStr += this.dataStore[i] + "\n";
        }
        return retStr;
    };
    Queue.prototype.empty = function() {
        if(this.dataStore.length==0) {
            return true;
        }else{
            return false;
        }
    };
    Queue.prototype.count = function () {
            return this.dataStore.length;
        }
</script>
```
# 基数排序
> 它不是最快的排序算法，但它展示了一些有趣的队列使用方法


> 原理：对于两位数，第一次排序个位数，那么就将十位数相同，个位数不同的排好顺序，第二次
> 再将十位数排序。最后按顺序将数字输出。那么就得到依次排序的数字

91，46, 85，15， 92，35，31, 22

bin 0：

bin 1: 91, 31

bin 2: 92, 22

bin 3:

bin 4:

bin 5: 85, 15, 35

bin 6: 46

bin 7:

bin 8:

bin 9:

得到第一次排序结果：

91，31, 92， 22， 85， 15， 35 ，46

bin 0：

bin 1: 15

bin 2: 22

bin 3: 31，35

bin 4: 46

bin 5:

bin 6:

bin 7:

bin 8: 85

bin 9: 91， 92

得到最终排序结果：

15， 22， 31， 35， 46，85， 91， 92

> 队列实现两位数基数排序

```javascript
 //队列实现基数排序
    //对数组nums内的数字进行排序，queues为一个队列数组，储存10 个队列，分别代表10位
    function distribute(nums,queues,digit) {
        for(var i=0;i<nums.length;i++) {
            if (digit == 1) {
                queues[nums[i] % 10].enqueue(nums[i]);
            } else {
                queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
            }
        }
    }
    //对数组队列内的数字进行收集
    function collect(queues,nums) {
        var i =0;
        for(var digit =0;digit<10;digit++) {
            while(!queues[digit].empty()) {
                nums[i++] =queues[digit].dequeue();
            }
        }
    }


    var num = [3, 56, 2, 53, 43, 54, 86, 23, 58, 29, 97, 65, 46];
    var queues = [];
    for(var i =0;i<10;i++) {
        queues[i] = new Queue();
    }

    //个位排序，收集
    distribute(num, queues, 1);
    collect(queues,num)
    console.log(num)
    //十位排序，收集
    distribute(num, queues,10);
    collect(queues,num)
    console.log(num)

</script>
```

# 优先级队列

```javascript
<script>
    //定义存储队列元素的对象，
    function Person(name,code) {
        this.name = name;
        this.code = code;//code用来存储优先级数字，数字越小优先级越高
    }
    //修改队列中的dequeue()方法
    function dequeue() {
        var priority = this.dataStore[0].code;
        for(var i=1;i<this.dataStore.length;i++) {
            if(this.dataStore[i].code<priority) {
                priority =i;

            }
        }
        return this.dataStore.splice(priority, 1);

    }
</script>
```

# 模拟链表的实现
> 类Node： 用来保存数据
* element： 保存此节点数据
* next:     保存下一个数据的指向引用

> 类LList： 用来操作Node里面的数据
* this.head  保存第一个节点。不储存用户数据内容
* find()     查找元素，找到则返回
* insert()   在某元素后面插入新元素
* remove()   删除一个元素
* display()  打印链表内容


```javascript
<script>
    function Node(element){
        this.element = element;
        this.next = null;
    }
    function LList() {
        this.head = new Node("head");

    }

    LList.prototype.find=function(item) {
        var currNode = this.head;
        while(currNode.element !=item) {
            currNode = currNode.next;

        }
        return currNode;
    }

    LList.prototype.insert=function(newElement,item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    LList.prototype.display=function() {
        var currNode = this.head;
        while(!(currNode.next==null)) {
            console.log(currNode.next.element);
            currNode=currNode.next;
        }
    }

    LList.prototype.findPrevious=function(item) {
        var currNode = this.head;
        while(!(currNode.next==null)&&(currNode.next.element!=item)) {
            currNode = currNode.next;

        }
        return currNode;
    }

    LList.prototype.remove=function(item) {
        var prevNode = this.findPrevious(item);
        if(!(prevNode.next==null)){
            prevNode.next =prevNode.next.next;
        }
    }

    //测试
    var cities = new LList();
    cities.insert("Conway", "head");
    cities.insert("Russellville", "Conway");
    cities.insert("Carlisle", "Russellville");
    cities.insert("Alma", "Carlisle");
    cities.display();
    cities.remove("Carlisle");
    cities.display();


</script>
```

# 双向链表
> 单向链表从头节点遍历到尾节点很简单，但反过来就没那么简单了，通过给Node对象增加一个属性，
> 该属性储存指向前驱节点的链接，这就容易多了。此时插入节点insert需要更多工作，但删除节点时，
> 效率提高了，不需要再查找待删除节点的前驱节点。

```javascript
function Node(element){
    this.element = element;
    this.next = null;
    this.previous = null;
}
```
```javascript
function insert(newElement,item){
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}
function remove(item){
    var currNode = this.find(item);
    if(!(currNode.next ==null)){
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }else{
        currNode.previous.next = null; //这是为了删除最后一个节点，但书中没有写到
    }
}
//查找最后一个
function findLast(){
    var currNode = this.head;
    while(!(currNode.next==null)){
        currNode = currNode.next;
    }
    return currNode;
}
function dispReverse(){
    var currNode = this.head;
    currNode = this.findLast();
    while(!(currNode.previous ==null)){
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}
//为完成从后面开始遍历，需要添加一个方法findLast();
```

# 循环链表
> 将链表的最后个元素的next指向头节点，就组成了循环链表。但每个方法都需要进行修改才能正常运作


# 链表补充
> 为了链表更好用，需要定义其他方法，如：
* advance(n)在链表中向前移动 n 个节点。
* back(n) 在双向链表中向后移动 n 个节点。
* show()只显示当前节点。

# 模拟二叉查找树的实现

* insert(data): 插入数据
* getMin():     返回最小值(node.data)
* getMax():     返回最大值(node.data)
* find(data)    查找数据，返回数据所在节点
* inOrder(node) 按大小顺序遍历。传入根节点
* preOrder(node) 按先序遍历。传入根节点
* postOrder(node) 按后序遍历。传入根节点
```javascript
<script>
    function Node(data,left,right) {
        this.data = data;
        this.left = left;
        this.right = right;
//        this.show = show;
    }
    Node.prototype.show = function() {
        return this.data;
    };

    function BST() {
        this.root = null;
//        this.insert = insert;
//        this.inOrder = inOrder;
    }
    BST.prototype.insert = function (data) {
        var n = new Node(data, null, null);
        if(this.root ==null) {
            this.root = n;
        }else{
            var current = this.root;
            var parent;
            while(true) {
                parent = current;
                if(data<current.data) {
                    current = current.left;
                    if(current ==null) {
                        parent.left = n;
                        break;
                    }
                }else{
                    current = current.right;
                    if(current ==null) {
                        parent.right =n;
                        break;
                    }
                }
            }
        }

    };

    //中序遍历：根据键值从小到大的遍历
    BST.prototype.inOrder= inOrder;
    function inOrder(node) {
        if(!(node==null)) {
            inOrder(node.left);
            console.log(node.show()+" ");
            inOrder(node.right);
        }
    }

    //先序遍历：先访问根节点，然后以同样的方式访问左子树和右子树。其与中序的不同仅仅是console.log()的输出位置不同
    BST.prototype.preOrder= preOrder;
    function preOrder(node) {
        if(!(node==null)) {
            console.log(node.show());
            preOrder(node.left);
            preOrder(node.right)
        }
    }

    //后序遍历：先访问叶子节点，先访问左子树，再访问右子树，同样也是输出位置不同
    BST.prototype.postOrder= postOrder;
    function postOrder(node) {
        if(!(node==null)) {
            postOrder(node.left);
            postOrder(node.right)
            console.log(node.show());
        }
    }
    //查找最小值
    BST.prototype.getMin = function() {
        var current = this.root;
        while(current.left!=null) {
            current = current.left;
        }
        return current.data;
    };
    //查找最大值
    BST.prototype.getMax = function() {
        var current = this.root;
        while(current.right!=null) {
            current = current.right;
        }
        return current.data;
    };
    //查找给定值
    BST.prototype.find = function(data) {
        var current = this.root;
        while(current!=null) {
            if(current.data==data) {
                return current;
            }else if(data<current.data) {
                current = current.left;

            }else{
                current = current.right;
            }
        }
        return null;
    };

    //删除节点,好吧，remove我还没看明白，^-^
//    BST.prototype.remove=function(data) {
//        root = removeNode(this.root, data);
//    }
//   function removeNode(node,data) {  //node,代表从哪个节点开始遍历，进行数据匹配删除
//       if(node ==null) {
//           return null;
//       }
//       if(data ==node.data) {
//           if(node.left ==null&&node.right==null) {
//               return null;
//           }
//           if(node.left ==null) {
//               return node.right;
//           }
//           if(node.right ==null) {
//               return node.left;
//           }
//           var tempNode = getSmallest(node.right);
//           node.data = tempNode.data;
//           node.right = removeNode(node.right, tempNode.data);
//           return node;
//       }else if(data<node.data) {
//           node.left = removeNode(node.left, data);
//           return node;
//       }else{
//           node.right = removeNode(node.right, data);
//           return node;
//       }
//
//   }
    var nums = new BST();
    nums.insert(23);
    nums.insert(45);
    nums.insert(16);
    nums.insert(37);
    nums.insert(3);
    nums.insert(99);
    nums.insert(22);

    nums.remove(23);
    console.log(nums.inOrder(nums.root));
</script>
```

# 图的实现

```
<script>
    function Graph(v) {
        this.edgeTo=[];
        this.vertices = v;//顶点的数量
        this.edges =0; //储存整个图的边数
        this.adj = [];  //二维数组，储存顶点，内层数组储存该顶点链接边的顶点
        for(var i=0;i<this.vertices;i++) {
            this.adj[i] = [];
//            this.adj[i].push("");//不明白这里为什么要加一个初始化的“”，导致后面思路有时候乱。扰乱的“”
        }
        this.addEdge = addEdge;///增加边
        this.showGraph = showGraph;//显示图边
        this.dfs = dfs;//深度优先搜索
        this.bfs = bfs;//广度优先搜索
        this.getMin = getMin;

        //深度搜索
        this.marks = [];//先添加一个数组，用来存储已经访问过的节点
        for(var i =0;i<this.vertices;i++) {
            this.marks[i] = false;//代表所有顶点未被访问
        }
    }
    function addEdge(v,w) {   //增加边的函数，传入两个顶点。
        this.adj[v].push(w);  //对这两个顶点增加边的描述
        this.adj[w].push(v);
        this.edges++;        //然后增加边数
    }
    function showGraph() {
        for(var i =0;i<this.vertices;i++) {
            console.log(i + "->");
            for(var j =0;j<this.adj[i].length;j++) {

                    console.log(this.adj[i][j] + " ");


            }

        }
    }
    //深度优先搜索，递归。
    function dfs(v) {
        this.marks[v] = true;
        if(this.adj[v]!=undefined) {
            console.log(v);
        }
        for(var i =0;i<this.adj[v].length;i++) {
            if(!this.marks[this.adj[v][i]]&&this.adj[v][i]!="") {
                this.dfs(this.adj[v][i]);
            }
        }
    }
    //广度优先搜索
    function bfs(s) {
        var queue = [];
        this.marks[s] = true;
        queue.push(s);
        while(queue.length>0) {
            var v = queue.shift();
            if(v != undefined) {
                console.log(v);
            }
            for(var i =0;i<this.adj[v].length;i++) {
                if(!this.marks[this.adj[v][i]]) {
                    this.edgeTo[this.adj[v][i]]=v;
                    this.marks[this.adj[v][i]]=true;
                    queue.push(this.adj[v][i]);
                }
            }
        }
    }
    //简单的获取最短路径
    function getMin(v) {
        var arr = [];
        if(v in this.adj)
            arr.push(v);
        while(this.edgeTo[v]!=undefined) {
            arr.push(this.edgeTo[v])
            v = this.edgeTo[v];
        }
        console.log(arr);
    }

    g = new Graph(9);
    g.addEdge(0,1);
    g.addEdge(0,2);
    g.addEdge(1,3);
    g.addEdge(2,4);
    g.addEdge(3, 5);
    g.addEdge(1, 6);
    g.addEdge(2, 7);
    g.addEdge(2, 8);



    //    g.showGraph();
    console.log(g.bfs(0));
    g.getMin(8)




</script>
```

# 冒泡排序
> 最慢的排序算法之一，也是一种最容易实现的排序算法
```
<script>
    function swap(arr,i) {  //注意，这里交换必须传入数组引用，如果传入某个数，不能改变数组原数据
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    function bubbleSort(arr) {
        //外层循环arr.length-1次.
        for(var i =arr.length-1;i>0;i--) {
            //内层循环为当前内层循环-1次
            for(var j = 0;j<=i-1;j++) {
                if(arr[j]>arr[j+1]) {
                    swap(arr,j);
                }
            }
        }
    }

    var arr = [3, 53, 2, 23, 88, 24, 1, 45,0,99,-1];
    bubbleSort(arr);
    console.log(arr);
</script>
```
# 选择排序
```
<script>
    function swap(arr,i,j) {  //注意，这里交换必须传入数组引用，如果传入某个数，不能改变数组原数据
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    function select(arr) {
        //外层循环从0开始，将0下标的数字和后面的都比个遍，再将1位置的和后面的比个遍
        for(var i =0;i<arr.length-1;i++) {
            for(var j = i+1;j<arr.length;j++) {
                if(arr[i]>arr[j]) {
                    swap(arr, i, j);
                }
            }
        }
    }
    var arr = [3, 53, 2, 23, 88, 24, 1, 45,0,99,-1];
    select(arr);
    console.log(arr);
</script>
```