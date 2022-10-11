const allMoney = [100, 50, 20, 5, 1];
function changeMoney(n, allMoney) {
    const length = allMoney.length;
    const result = [];
    for (let i=0; i < length; i++) {
        if (n >= allMoney[i]) {
            // 如果需要找的钱比面值大，那就可以找，除一下看看能找几张
            result[i] = parseInt(n / allMoney[i]);
            n = n - result[i] * allMoney[i]; 
        } else {
            // 否则不能找
            result[i] = 0;
        }
    }
    return result;
}

const result = changeMoney(126, allMoney);
console.log(result); 