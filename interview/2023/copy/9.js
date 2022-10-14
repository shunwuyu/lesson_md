// for in 性能低
// while的效率是最好的 想办法把for in遍历改变为while遍历

function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}

// 当遍历数组时，直接使用forEach进行遍历，当遍历对象时，
// 使用Object.keys取出所有的key
// 进行遍历，然后在遍历时把forEach会调函数的value当作key使用

function clone(target, map = new WeakMap()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target);
        let cloneTarget = isArray ? [] : {};

        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);

        const keys = isArray ? undefined : Object.keys(target);
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value;
            }
            cloneTarget[key] = clone(target[key], map);
        });

        return cloneTarget;
    } else {
        return target;
    }
}
