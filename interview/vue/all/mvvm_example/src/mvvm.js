import { observe } from './observer';
import Compile from './compile'
function MVVM (options) {
    console.log(options)  
    var self = this;
    this.data = options.data;
    this.methods = options.methods;
    // this.title 的支持
    Object.keys(this.data).forEach(function(key) {
        self.proxyKeys(key);
    });  
    observe(this.data);
    new Compile(options.el, this);
}

MVVM.prototype = {
    proxyKeys: function (key) {
        var self = this;
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function getter () {
                return self.data[key];
            },
            set: function setter (newVal) {
                self.data[key] = newVal;
            }
        });
    }
}

export default MVVM