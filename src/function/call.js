export function call(fn,obj,...args) {
    //给对象添加一个方法，为原函数
    if(obj==null||obj==undefined){
        obj=window
    }
    obj.fn=fn
    const result=obj.fn(...args)
    delete obj.fn
    return result
}

