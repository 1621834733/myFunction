export function map(array, fn) {
    const arr = []
    for (let index = 0; index < array.length; index++) {
        const item = array[index]
        const result = fn(item, index)
        arr.push(result)
    }
    return arr
}
export function reduce(array,fn,init) {
    let result=init
    for (let index=0;index<array.length;index++){
        const item=array[index]
        result=fn(result,item,index)
    }
    return result
}
export function filter (array,fn) {
    const arr=[]
    for(let index=0;index<array.length;index++){
        const item=array[index]
        const result=fn(item,index)
        result?arr.push(item):''
    }
    return arr
}
export function find (array,fn) {
    let result=''
    for (let index=0;index<array.length;index++){
        const item = array[index]
        result=fn(item,index)
        if(result){
           return item
        }
    }
    return undefined
}
export function findIndex(fn) {
    let result=''
    for (let index=0;index<findIndex.length;index++){
        const item = findIndex[index]
        result=fn(item,index)
        if(result){
            return index
        }
    }
    return -1
}
export function every(fn) {
  let result = true
    for (let index=0;index<every.length;index++){
        const item =every[index]
        result=result&&fn(item,index)
    }
    return result
}
export function some(fn) {
    let result = false
    for (let index=0;index<some.length;index++){
        const item =some[index]
        result=result||fn(item,index)
    }
    return result
}
export function unique1(array) {
    //实现简单，缺点:效率低，需要两个循环遍历
    let arr=[];
    array.forEach((item)=>{
        if(arr.indexOf(item)===-1){
            arr.push(item)
        }
    })
    return arr;
}
export function unique2(array) {
    //效率高，缺点:内存占用更高
   let arr=[]
    let obj={}
    array.forEach((item)=>{
        if(!obj.hasOwnProperty(item)){
            arr.push(item)
            obj[item]=true
        }
    })
    return arr
}
export function unique3(array) {
    //简洁
    //new Set返回一个Set对象，通过三点运算符可以取出每一项
   return [...new Set(array)]
}
export function unique4(array) {
//不调用js方法
    let arr=[]
    arr[0]=array[0]
    let has =false
    for(let i=0;i<array.length;i++){
        for(let j=0;j<arr.length;j++){
            if(array[i]==arr[j]){
                has=true
                break
            }
        }
        if(!has){
            arr[arr.length]=array[i]
        }
        has=false
    }
    return arr
}
export function concat(array,...args){
    let arr=[...array]
    args.forEach((item)=>{
        if(Array.isArray(item)){
            arr.push(...item)
        }else {
            arr.push(item)
        }
    })
    return arr
}
export function slice(array,begin=0,end=array.length) {
    const arr=[]
    if(array.length===0){
        return arr
    }
    begin<0?begin=0:begin
    end>array.length?end=array.length:end
    for(let index=begin;index<end;index++){
        arr.push(array[index])
    }
    return arr
}

