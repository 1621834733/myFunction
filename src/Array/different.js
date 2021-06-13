// 返回两个数组里不同的部分
export function different(array1,array2) {
    if(array1.length===0){
        return array2
    }
    if(array2.length===0){
        return array1
    }
    let arr=[]
    function  add(arr1,arr2) {
        let arr=[]
        let has = false
        for (let i = 0; i <arr1.length ; i++) {
            has = false
            for (let j = 0; j <arr2.length ; j++) {
                if(arr2[j]===arr1[i]){
                    has = true
                    break
                }
            }
            if(!has){
                arr.push(arr1[i])
            }
        }
        return arr
    }
    let arr1=add(array1,array2)
    let arr2=add(array2,array1)
    let arr3=arr.concat(arr1,arr2)
    return arr3
}

//返回第一个数组与其他数组不同的地方
export  function differences(...array) {
    let arr=[...array]
    let result=arr[0].filter((item)=>{
        let has =false
        for(let i=1;i<arr.length;i++){
          if(arr[i].indexOf(item)!==-1){
              has = true
              break
          }
        }
        if(!has){
            return true
        }else {
            return false
        }
    })
    return result
}
