
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