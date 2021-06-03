export function apply (fn,obj,args) {
    if(obj==null||obj==undefined){
        obj=window
    }
    obj.fn=fn
    let result=obj.fn(...args)
    delete obj.fn
    return result
}