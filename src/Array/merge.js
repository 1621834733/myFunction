//合并数组，不同数组之间相同的数去掉
export function merge(...arrays) {
        let arr = [...arrays]
        let result = [...arr[0]]
        if (arr.length === 0) {
            return result
        }
        for (let i = 1; i < arr.length; i++) {
            arr[i].forEach((item) => {
                if (result.indexOf(item) === -1) {
                    result.push(item)
                }
            })
        }
        return result
    }
