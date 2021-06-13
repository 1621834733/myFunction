
//自定义方法创建对象
export function newInstance(Fn,...args) {
        let obj={};
        const result=Fn.call(obj,...args)
        if(result instanceof Object){
            return result
        }else {
            // obj.__proto__={}
            // obj.constructor=Fn
            //这种方法有个隐藏的bug就是每个实例的隐式原型都不一样（地址不同）
            obj.__proto__=Fn.prototype
            return obj
        }

}

export function myInstacne(obj,type) {
    let objProto=obj.__proto__
    while(objProto!==null){
        if(objProto===type.prototype){
            return true
        }
        objProto=objProto.__proto__
    }
    return false
}

