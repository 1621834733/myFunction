//插入排序
//左边为有序区，右边为无序区
export function insert(obj) {
    for (let i = 1; i < obj.length; i++) {
        let start=obj[i]
        let j
        for (j = i-1; j >=0 ; j--) {
            if(obj[j]>start){
                obj[j+1]=obj[j]
            }else {
                break
            }
            }
        obj[j+1]=start
        }
    return obj
}
