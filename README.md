<h3>名称：scream.js</h3>

<b>简介：这是利用ES5.1开发的一个统计数组或字符串小型工具包，其包含如获取频率最高值，最低值，平均频率，升序，降序，查询等功能。</b>
</br>

<h4>开始使用:</h4>
var word='hello world';
</br>
var scream = new Scream({
</br>
    &nbsp;&nbsp;&nbsp;&nbsp; data: word
</br>     
})
</br>
scream.toMax(); //[{key:'l',num:3}]
</br>

<h4>初始参数：</h4>
new Scream({
</br>
  &nbsp;&nbsp;&nbsp;&nbsp; data:[],        //所要传递的字符串或者数组
  </br>
  &nbsp;&nbsp;&nbsp;&nbsp; type:"default",  //初始返回对象形式['default','asc','desc']，默认为'default'
  </br>
  &nbsp;&nbsp;&nbsp;&nbsp; filter: true, //是否过滤部分特殊符号，默认开启
  </br>
  &nbsp;&nbsp;&nbsp;&nbsp; debug: true  //是否开启校验提示，默认开启
  </br> 
}）
</br>

<h4>包含方法：</h4>
scream.toAsc()
</br>
返回升序对象
</br>
</br>

scream.toDesc()
</br>
返回降序对象
</br>

scream.toMax()
</br>
返回出现频率最多对象的数组[{key,num}]

scream.toMin()
</br>
返回获取出现频率最少对象的数组[{key,num}]

scream.toAvg(?bool)
</br>
返回所有项的出现频率的均值(bool:可选参数,是否开启向下取整，默认不开启)

scream.getList(?number)
</br>
返回列表(number:可选参数,其代表可返回对象列表数量，默认全部返回)

scream.toRemove(string)
</br>
返回删除键值的原对象(string:所要删除的键值)

scream.toSearch(string)
</br>
返回所要查找对象信息{key,num}(string:所要查找键值,可以是词组或单词)

scream.toLink()
</br>
返回原对象本身
