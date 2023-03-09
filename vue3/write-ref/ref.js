import { track } from './effect.js'

export function ref(val) {
    // console.log(isRef(val))
    if (isRef(val)) {
        return val
    }
    return new RefImpl(val)
}

class RefImpl {
    constructor(val) {
        this.__isRef = true
        this._val = convert(val)
    }
    get value() {
        track(this, 'get', 'value')
        return this._val
    }
    set value(val) {
        if (val !== this._val) {
            this._val = convert(val)
        }
    }
}

function convert(val) {
    return val
    // return isObject(val) ? reactive(val) : val
}

export function isRef(val) {
    return !!(val && val.__isRef)
}