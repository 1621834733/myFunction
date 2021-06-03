//函数防抖
export function debounce(fn,delayTime) {

    return function (event) {
        if(fn.hasOwnProperty('timer')){
            clearTimeout(fn.timer)
        }
        fn.timer=setTimeout(()=>{
            fn.call(this,event)
            delete fn.timer
        },delayTime)
    }
}