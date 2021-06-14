//自定义栈，使用数组封装
function Stack() {
    //用于保存数据的数组
    const arr=[]
    //压栈push
    // Stack.prototype.push=function (element) {
    //         arr.push(element)
    // }
    //不要用原型来定义方法，因为会导致不同实例共用数据
        this.push=function (element) {
                 arr.push(element)
         }
    //出栈pop
    this.pop=function () {
            return arr.pop()
    }
    //查看栈顶
    this.peek=function () {
          return arr[arr.length-1]
    }
    //栈的大小
    this.size=function () {
        return arr.length
    }
    //栈是否为空
    this.isEmpty=function () {
        return arr.length===0
    }
}
// function dec2bin(dec) {
//     const stack=new Stack()
//     while(dec>0){
//     let result=dec % 2
//     stack.push(result)
//     dec=Math.floor(dec/2)
//     }
//     let result1=''
//     while (!stack.isEmpty()){
//         result1+=stack.pop()
//     }
//     return result1
// }
//
// console.log(dec2bin(16));
export default Stack
