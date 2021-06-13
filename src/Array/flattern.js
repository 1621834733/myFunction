export function flattern1(array) {
    //三点运算符，只有一维数组会被三点运算符拆开，其他都会递归
    let arr=[]
    array.forEach((item)=>{
        if(Array.isArray(item)){
            arr.push(...flattern1(item))
        }else {
            arr.push(item)
        }
    })
    return arr;
}
export function flattern2(array) {
//reduce+concat方法，concat会将一维数组拆开，利用这个特性和递归就能实现扁平化
    return array.reduce((adder,item)=>{
     return adder.concat(Array.isArray(item)?flattern2(item):item)
    },[])
}
export function flattern3(array) {
//转为字符串再转为数字
    return array.toString().split(',').map((item)=>{
                    return Number(item)
    })
}
