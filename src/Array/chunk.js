//一维数组返回二维数组，长度自定义
export function chunk(array,length=1) {
    let arr=[];
    let arrSmall=[];
    length=Math.floor(length)
    length<1?length=1:length
    length>array.length?length=array.length:length
    array.forEach((item)=>{
        if(arrSmall.length===0){
            arr.push(arrSmall)
        }
        arrSmall.push(item)
        if(arrSmall.length===length){
               arrSmall=[]
        }
    })
    return arr
}
