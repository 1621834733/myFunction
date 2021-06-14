//自定义队列
/*
入队列：enqueue()
出队列：outqueue()
查看队列头：front()
查看队列长度:size()
查看队列是否为空：isEmpty()
*/
export function Queue(){
    //用于保存数据的数组
    const arr = []
    //不要用原型来定义方法，因为会导致不同实例共用数据
    this.enQueue = function (element) {
        arr.push(element)
    }
    //出栈pop
    this.outQueue = function () {
        return arr.shift()
    }
    //查看栈顶
    this.front = function () {
        return arr[0]
    }
    //栈的大小
    this.size = function () {
        return arr.length
    }
    //栈是否为空
    this.isEmpty = function () {
        return arr.length === 0
    }
}
//自定义优先级队列
export  function priorityQueue() {
    //用于保存数据的数组
    const arr = []
    function QueueElement(data,priority) {
        this.data=data
        this.priority=priority
    }
    //不要用原型来定义方法，因为会导致不同实例共用数据
    this.enQueue = function (data,priority) {
        if(priority<0||priority>100){
            throw new Error('优先级值必须在0至100之间')
        }
        const element=new QueueElement(data,priority)
        if(arr.length===0){
            arr.push(element)
        }else {
            //将当前element插入合适位置
            for(let i=0;i<arr.length;i++){
                if(arr[i].priority>priority||arr[i].priority===priority){
                    arr.splice(i,0,element)
                    return
                }
            }
            arr.push(element)
        }
    }
    //出栈pop
    this.outQueue = function () {
        return arr.shift()
    }
    //查看栈顶
    this.front = function () {
        return arr[0]
    }
    //栈的大小
    this.size = function () {
        return arr.length
    }
    //栈是否为空
    this.isEmpty = function () {
        return arr.length === 0
    }
}