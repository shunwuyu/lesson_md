const UUID = require('uuid');
const Wallet = (function () {
  var id, createTime, balance, balanceLastModifiedTime;
  return function() {
    // console.log('---------');
    id = UUID.v1().replace(/-/g,"");
    createTime = +new Date();
    balance = 0;
    balanceLastModifiedTime = +new Date();
    return {
      getId: function() {
        return id;
      },
      getCreateTime: function() {
        return createTime;
      },
      getBalance: function() {
        return balance;
      },
      getBalanceLastModifiedTime: function() {
        return balanceLastModifiedTime
      },
      increaseBalance:function(increasedAmount) {
        balance += increasedAmount;
        balanceLastModifiedTime = + new Date();
      },
      decreaseBalance(decreasedAmount) {
        if (decreasedAmount > balance) {
          throw new Error('您的钱不够');
        }
        balance -= decreasedAmount;
        balanceLastModifiedTime = + new Date();
      }
    }
  }
})();

const wallet = new Wallet();
wallet.increaseBalance(20);
wallet.decreaseBalance(10);
console.log(wallet.getBalance());
