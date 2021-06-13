//合并数组
export function mergeObj(...obj) {
   let result={}
   obj.forEach((item)=>{
       Object.keys(item).forEach((key)=>{
           const value=item[key]
           let arr=[]
           if(Object.keys(result).indexOf(key)!==-1){
               arr.push(result[key])
               arr.push(value)
               result[key]=arr
           }else {
               result[key]=value
           }

       })
   })
   return result
}
