export function debounce(func, wait) {
  var timeout, result;

  return function () {
      var context = this;
      var args = arguments;

      clearTimeout(timeout)
      timeout = setTimeout(function(){
          result = func.apply(context, args)
      }, wait);

      return result;
  }
}
export function decDebounce(wait) {
  return function handleDescriptor(target, key, descriptor) {
    console.log('descriptor', descriptor)
    const callback = descriptor.value || descriptor.initializer;

    if (typeof callback !== 'function') {
      throw new SyntaxError('Only functions can be debounced');
    }

    var fn = debounce(callback, wait);
    descriptor.value = fn;
    // return {
    //   ...descriptor,
    //   value() {
    //     fn()
    //   }
    // };
  }
}