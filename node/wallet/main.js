const UUID = require('uuid');
class Wallet {
  constructor() {
    this._id = UUID.v1().replace(/-/g,"");//两步讲
    // console.log(this._id);
    this._createTime = +new Date();
    this._balance = 0;
    this._balanceLastModifiedTime = +new Date();
  }
  getId() {
    return this._id;
  }
  // set _id(newId) {
  //   throw new Error('不可以修改id');
  // }
  getCreateTime() { return this._createTime; }
  getBalance() {
    return this._balance;
  }
  getBalanceLastModifiedTime() {
    return this._balanceLastModifiedTime
  }
  increaseBalance(increasedAmount) {
    this._balance += increasedAmount;
    this._balanceLastModifiedTime = + new Date();
  }
  decreaseBalance(decreasedAmount) {
    if (decreasedAmount > this._balance) {
      throw new Error('您的钱不够');
    }
    this._balance -= decreasedAmount;
    this._balanceLastModifiedTime = + new Date();
  }
}

const wallet = new Wallet();
wallet.increaseBalance(300000);
wallet.decreaseBalance(1000);
console.log(wallet.getBalance());