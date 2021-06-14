//希尔排序（插入排序的改进，加快排序速度）
/*
1.计算出一个增量数组  length/2向下取整
2.该增量数组递减
3.最后一个增量为1
4.以当前增量对数组进行分组，分成多个小数组，对每个销售组进行插入排序，每个小数组进行交替进行
*/
export function Shell(obj) {
    const length=obj.length
    let distance=length
    while (distance>1){
        distance=Math.floor(distance/2)
        for (let i = distance; i < length; i++) {
            const start=obj[i]
            let j
            for (j = i-distance; j>=0; j=j-distance) {
                if(obj[j]>start){
                    obj[j+distance]=obj[j]
                }else {
                    break
                    //break后i不会自增自减
                }
            }
            obj[j+distance]=start
        }
    }
    return obj
}