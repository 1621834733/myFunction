//去掉数组左边或右边指定长度的数
export function drop(array,length=1) {
    let arr=[]
    length>array.length?length=array.length:length
    arr=array.filter((item,index)=>{
        if(index<length){
            return false
        }else {
            return true
        }
    })
    return arr
}

export function dropRight(array,length=1) {
    let arr=[]
    length>array.length?length=array.length:length
    arr=array.filter((item,index)=>{
        if(index<array.length-length){
            return true
        }else {
            return false
        }
    })
    return arr
}
