export function babbleUp(obj) {
    //冒泡排序
    let temp=0
    for (let i = 0; i < obj.length; i++) {
        for (let j = 0; j < obj.length -i-1 ; j++) {
            if(obj[j]<obj[j+1]){
                temp=obj[j]
                obj[j]=obj[j+1]
                obj[j+1]=temp
            }
        }
    }
    return obj
}
