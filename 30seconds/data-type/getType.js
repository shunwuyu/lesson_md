function getType(obj) {
  if (obj && obj.constructor && obj.constructor.name) {
    return obj.constructor.name;
  }
  return Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/,"$1").toLowerCase();
}