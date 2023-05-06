// 三个状态, 不可逆的
const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class Promise {
    constructor(executor) {
        // 为了证明是自己写的
        console.log('我的promise');
        // 默认起始状态
        this.status = PENDING;
        // 初始化
        this.value = null;
        this.reason = null;
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        // 执行器默认执行
        // 两个参数
        // executor(this.resolve, this.reject);
        // this 丢失
        // executor(this.resolve.bind(this), this.reject.bind(this));
        // 有可能抛错的 try catch 
        try {
            executor(this.resolve.bind(this), this.reject.bind(this));
        } catch (error) {
            this.reject(error);
        }
    }
    resolve(value) {
        // if是状态是pending 才能改, 不可以失败了再reject
        if (this.status === PENDING) {
            this.value = value;
            this.status = RESOLVED;
            this.resolveCallbacks.forEach(onFullfilled => {
                onFullfilled(this.value);
            });
        }
    }   
    reject(reason) {
        if (this.status === PENDING) {
            this.reason = reason;
            this.status = REJECTED;
            this.rejectCallbacks.forEach(onRejected => {
                onRejected(this.reason);
            })
        }
    }
    // 不会等的
    then(onFullfilled, onRejected) {
        console.log('then 状态', this.status);
        // onFullfilled(this.value);
        if (this.status === PENDING) {
            // ? 先存起来
            this.resolveCallbacks.push(onFullfilled);
            this.rejectCallbacks.push(onRejected);
        }
        if (this.status == RESOLVED) {
            onFullfilled(this.value);
        }
        if (this.status === REJECTED) {
            onRejected(this.reason);
        }
    }
}
// node 环境做测试
module.exports = Promise;

