const thousand = num => num.toString().replace(/(?=(\d{3})+(?!\d))/g, ",")
const money = thousand(19941112);
console.log(money);