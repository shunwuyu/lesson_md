function watch(obj, name, func) {
  let value = obj[name];

  Object.defineProperty(obj, name, {
    get: function () {
      return value;
    },
    set: function (newValue) {
      value = newValue;
      func(value)
    }
  });

  if (value) obj[name] = value
}