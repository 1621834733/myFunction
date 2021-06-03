
export function throttle(fn,delayTime){
    let pre=0;
    //暴露给事件的是返回的函数不是fn，fn没有event参数
    return function (event) {
       const current=Date.now()
       if(current-pre>delayTime){
           fn.call(this,event)
           pre=current
       }
   }
}
