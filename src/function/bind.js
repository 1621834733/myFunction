export function bind(fn,obj,...args) {
    return (...args2)=>{
        if(obj==null||obj==undefined){
            obj=window
        }
        obj.fn=fn
        let result=obj.fn(...args,...args2)
        delete obj.fn
        return result
    }
}