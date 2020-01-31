
//普通的数组for循环
let arr = [1,2,3,4,5,6]
for(let index = 0;index < arr.length;index++){
   console.log(arr[index])
   console.log(index)
   console.log(arr)

}

//数组的forEach不支持continue break
let arr = [1, 2, 3, 4, 5, 6]
arr.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
    if(item === 2){
        //这里不写 或者写return 都会跳过2这一项
    } else {
        console.log(item)
    }
})


//数组的every可以模拟break(return false 默认值) 和continue(return true)
//every 一般用来检测数组总所有的元素是否满足 某个条件
let arr = [1, 2, 3, 4, 5, 6]
let res = arr.every((item, index, arr) => {
     return item > 5 //数组每每一项都大于5吗？
})
console.log(res) //false 


//数组的filter  用于检测数组中所有的元素是否满足某些条件 将满足条件的项 组合成新的数组返回
let arr = [1, 2, 3, 4, 5, 6]
let res = arr.filter((item, index, arr) => {
    return item > 5 //数组中哪些项数大于5吗？ 弄成一个数组返回给我
})

console.log(res) //false 

//调用某个对象的方法给其他对象用

function test (num1,num2,num3,num4){
    
     let args = Array.from(arguments)
     console.log(args)

}
test(1,2,3,4,5,6)  // 打印结果 [1,2,3,4,5,6]

//求菲波那切数列的浅浅20个数字 第一项和第二项是1 第三是前两项的和

let arr = [];
 arr[0] = 1
 arr[1] = 1
 for(let i = 2;i<20;i++){
     arr[i] = arr[i-1]+arr[i-2]
 }

 console.log(arr)

 //数组的reduce方法  接收两个参数 callback和intValue(初始化参数)
  
 实现数组的累加

 let arr = [1,2,3,4,5]
 let intValue = 6
 let res = arr.reduce((pre,cur,curIndex,arr)=>{
     //callback的参数分别是前一个回调执行的结果,现在执行的那一项,现在执行的那一项的索引,以及调用reduce的数组本身
    return pre + cur
 },intValue)
console.log(res)  //21

//join 将数组用指定符号转成字符串

let arr = [1,2,3,4,5]
let res = arr.join('-')
console.log(res) //返回字符串

//concat 连接2个或者更多数组

let arr = [1,2,3]
let arr1 = [4,5,6,7,8]
let arr2 = [9,10]
let res = arr.concat(arr1,arr2)
console.log(res)

//map 方法 将数组中的项 用回调后 组成新数组 并且返回

let arr = [1,2,3,4]
let res = arr.map((item)=>{
   return item*3 
})
console.log(res)

//reverse 颠倒数组中的元素
let arr = [1,2,3,4,5]
let res =arr.reverse()
console.log(res)

//slice  传入索引切断数组的一部份以数组返回
let arr = [1,2,3,4,5,6]
let res = arr.slice(1,5)
       //从索引为1的值开始切到索引为5的值 不包括5
console.log(res) 

//some 放回布尔值 数组中有一项满足条件就返回true

let arr =[1,2,3,4,5,6]
let res = arr.some((item)=>{
    return item > 4
})

console.log(res)

//sort 按字母顺序排序 
let arr = ["a", "b", "d","c"]
let res = arr.sort()
console.log(res)
//sort 给数字排序
let arr = [1,4,2,8,3,0]
let res = arr.sort((a,b)=>{
    return a - b  //升序
})
let res = arr.sort((a, b) => {
    return b - a //降序
})
console.log(res)

//toString 将数组作为字符串 返回
let arr = [1,2,3,4,5]
let res = arr.toString()
console.log(res)

//valueOf()
let arr = [1,2,3,4,5]
let res = arr.valueOf()
console.log(res)
//生成一个随机的8为码

let  res = Math.random().toString(36).slice(-8)

 console.log(res)