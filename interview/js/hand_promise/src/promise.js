// 状态决议前是pengding   
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class Promise {
    constructor(executor) {
        console.log('我的promise')
        this.status = PENDING;
        // 执行器默认自动执行
        this.value = null;
        this.reason = null;
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        // 
        try {
            executor(this.resolve.bind(this), this.reject.bind(this)) // this 丢失
        } catch(error) {
            this.reject(error)
        }
        // executor(this.resolve, this.reject)
        // executor(this.resolve.bind(this), this.reject.bind(this)) // this 丢失
    }
    resolve(value) {
        if (this.status === PENDING) {
            this.value = value;
            this.status = RESOLVED;
            this.resolveCallbacks.forEach(onFulfilled => {
                onFulfilled(this.value)
            })
        }
    }
    reject(reason) {
        if (this.status === PENDING) {
            this.reason = reason;
            this.status = REJECTED;
            this.rejectCallbacks.forEach(onRejected => {
                onRejected(this.reason)
            })
        }
    }
    // then(onFulfilled, onRejected) {
    //     console.log('then状态', this.status)
    //     // onFulfilled(this.value);
    //     if(this.status === PENDING) {
    //         this.resolveCallbacks.push(onFulfilled)
    //         this.rejectCallbacks.push(onRejected)
    //     }
    //     if(this.status === RESOLVED) {
    //         onFulfilled(this.value)
    //     }   
    //     if(this.status === REJECTED) {
    //         onRejected(this.reason)
    //     }
    // }
    // then 链式调用
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : data => data
        onRejected = typeof onRejected === 'function' ? onRejected: err => { throw err}
        let promise2 = new Promise((resolve, reject) => {
            if(this.status === PENDING) {
                this.resolveCallbacks.push(onFulfilled)
                this.rejectCallbacks.push(onRejected)
            }
            if(this.status === RESOLVED) {
                onFulfilled(this.value)
            }   
            if(this.status === REJECTED) {
                onRejected(this.reason)
            }

        })
        return promise2
        // console.log('then状态', this.status)
        // onFulfilled(this.value);
        
    }
}

module.exports = Promise