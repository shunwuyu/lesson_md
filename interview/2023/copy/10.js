function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}

if (!isObject(target)) {
    return target;
}

function getType(target) {
    return Object.prototype.toString.call(target);
}