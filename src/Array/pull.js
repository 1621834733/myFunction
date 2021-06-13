//删除与给定数值相同的数组元素，返回被删除的元素
export function pull(array,...value){
    let result=[]
    for(let i=0;i<array.length;i++){
       if(value.indexOf(array[i])!==-1){
           result.push(array[i])
           array.splice(i,1)
           i--
       }
    }
   return result
}
