// WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
// let obj = { name : 'ConardLi'}
// const target = new Map();
// target.set(obj,'code秘密花园');  虽然我们手动将obj，进行释放，
// 然是target依然对obj存在强引用关系，所以这部分内存依然无法被释放。
// obj = null;
// 如果是WeakMap的话，target和obj存
// 在的就是弱引用关系，当下一次垃圾回收机制执行时，这块内存就会被释放掉。
// let obj = { name : 'ConardLi'}
// const target = new WeakMap();
// target.set(obj,'code秘密花园');
// obj = null;
function clone(target, map = new Map()) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return map.get(target);
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
};
