import { useMemo } from 'react';
const usePow = (list) => {
    // return list.map((item) => {
    //     console.log(item)
    //     return Math.pow(item, 2)
    // })
    return useMemo(() => list.map((item) => {
        console.log(1)
        return Math.pow(item, 2)
    }), []) 
}

export default usePow