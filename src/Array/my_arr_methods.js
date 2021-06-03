export function map(array,fn) {
    const arr=[]
    for(let index=0;index<array.length;index++){
        const item=array[index]
        const result=fn(item,index)
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

