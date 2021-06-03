const arr=[1,2,3,4,5,6,15,19,24,33]
//返回原数组每一项加10的数组
console.log(arr.map((item)=>{return item+10}))
//得到所有奇数的和
let result=arr.reduce((adder,item)=>{
    if(item%2==1){
        return adder+item
    }
    return adder
},0)
console.log(result)
//得到值大于8且下标是偶数位的
console.log(arr.filter((item,index)=>{if(index%2==0&&item>8){return item}}))
//得到一个值大于8且下标是偶数位的
console.log(arr.find((item,index)=>index%2==0&&item>8))
//得到一个值大于8且下标是偶数位的
console.log(arr.findIndex((item,index)=>index%2==0&&item>8))
//判断下标为偶数的值是否都为奇数
console.log(arr.every((item,index)=>index%2==1||(index%2==0&&item%2==1)))
//判断是否有下标为偶数的值是奇数
console.log(arr.some((item,index)=>index%2==0&&item%2==1))