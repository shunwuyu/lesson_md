function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}