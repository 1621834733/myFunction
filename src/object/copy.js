export function copyShallow(obj) {
   if(obj instanceof Array){
       // return [...obj]
       return obj.slice()
   }else if(obj!==null&&typeof obj==='object'){
       return {...obj}
   }else {
       return obj
   }
}
// function copyDeep(obj){
//     //Json不能存储函数，会丢失
//    return  JSON.parse(JSON.stringify(obj))
// }
 export function copyDeep(obj){
    //无法解决循环引用的问题
    if(obj instanceof Array||obj !==null&&typeof obj==='object'){
        const copyObj=obj instanceof Array?[]:{}
        for(const key in obj){
            if(obj.hasOwnProperty(key)){
                copyObj[key]=copyDeep(obj[key])
            }
        }
        return copyObj
    }else {
        return obj
    }
}
 export function copyDeep1(obj,map=new Map()) {
    if(obj instanceof Array||obj !==null&&typeof obj === 'object'){
        let copyObj=map.get(obj)
        if(copyObj){
            return copyObj
        }
        copyObj=obj instanceof Array?[]:{}
        map.set(obj,copyObj)
        for (const key in obj) {
            if(obj.hasOwnProperty(key)){
               copyObj[key]=copyDeep1(obj[key])
            }
        }
        return copyObj
    }else {
        return obj
    }

}
export function copyDeep2(obj,map=new Map()){
    //优化数组遍历
    //由于数组遍历时forEach效率明显高于for in，因此要优化
    if(obj instanceof Array||obj !==null&&typeof obj==='object'){
        let copyObj=map.get(obj)
        if(copyObj){
            return copyObj
        }
        if(obj instanceof Array){
            let copyObj=[]
            obj.forEach((item,index)=>{
                if(obj.hasOwnProperty(index)){
                    copyObj[index]=copyDeep2(item)
                }

            })
            map.set(obj,copyObj)
            return copyObj
        }else {
            let copyObj={}
            for (const key in obj) {
                if(obj.hasOwnProperty(key)){
                    copyObj[key]=copyDeep2(obj[key])
                }

            }
            map.set(obj,copyObj)
            return copyObj
        }
    }else {
        return obj
    }
}

