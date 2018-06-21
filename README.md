## scream.js
<b>简介：这是利用ES5.1开发的一个统计数组或字符串小型工具包，其包含如获取频率最高值，最低值，平均频率，升序，降序，查询等功能。</b>

## 开始使用:
```html
var word='hello world';
var scream = new Scream({
   data: word    
})
scream.toMax(); //[{key:'l',num:3}]
```

## 初始参数：
```html
new Scream({
  data:[],        //所要传递的字符串或者数组
  type:"default",  //初始返回对象形式['default','asc','desc']，默认为'default'
  filter: true, //是否过滤部分特殊符号，默认开启
  true  //是否开启校验提示，默认开启
}）
```

## 包含方法：
```html
scream.toAsc()
返回升序对象
```
```html
scream.toDesc()
返回降序对象
```
```html
scream.toMax()
返回出现频率最多对象的数组[{key,num}]
```
```html
scream.toMin()
返回获取出现频率最少对象的数组[{key,num}]
```
```html
scream.toAvg(?bool)
返回所有项的出现频率的均值(bool:可选参数,是否开启向下取整，默认不开启)
```
```html
scream.getList(?number)
返回列表(number:可选参数,其代表可返回对象列表数量，默认全部返回)
```
```html
scream.toRemove(string)
返回删除键值的原对象(string:所要删除的键值)
```
```html
scream.toSearch(string)
返回所要查找对象信息{key,num}(string:所要查找键值,可以是词组或单词)
```
```html
scream.toLink()
返回原对象本身
```
