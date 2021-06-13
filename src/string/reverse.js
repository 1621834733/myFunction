export function reverseStr(str) {
   return str.split('').reverse().join('')
}
export function palindrome(str) {
    //判断是否是回文，返回值为布尔值
    let result=false
    if(str===str.split('').reverse().join('')){
        result = true
    }
    return result
}
export function truncate(str,num){
    //截取一部分字符串，以...结束
    if(str.length>num){
        return str.substring(0,num)+'...'
    }else {
        return str
    }
}
