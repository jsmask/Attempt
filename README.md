名称：screend.js

简介：这是利用ES5.1开发的一个统计数组或字符串小型工具包，其包含如获取频率最高值，最低值，平均频率，升序，降序，查询等功能。

开始使用:
var word='hello world';
var screend = new Screend({
				data: word
})
screend.toMax(); //[{key:'l',num:3}]
初始参数：

new Screend({
  data:[],        //所要传递的字符串或者数组
  type:"default",  //初始返回对象形式('default','asc','desc')，默认为'default'
  filter: true, //是否过滤部分特殊符号，默认开启
  debug: true  //是否开启校验提示，默认开启
}）

包含方法：
screend.toAsc()  
返回升序对象

screend.toDesc() 
返回降序对象

screend.toMax() 
返回出现频率最多对象的数组[{key,num}]

screend.toMin()
返回获取出现频率最少对象的数组[{key,num}]

screend.toAvg(?bool)
返回所有项的出现频率的均值(bool:可选参数,是否开启向下取整，默认不开启)

screend.getList(?number) 
返回列表(number:可选参数,其代表可返回对象列表数量，默认全部返回)

screend.toRemove(string)
返回删除键值的原对象(string:所要删除的键值)

screend.toSearch(string)
返回所要查找对象信息{key,num}(string:所要查找键值,可以是词组或单词)

screend.toLink()
返回原对象本身
