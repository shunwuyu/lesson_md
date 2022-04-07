const details = ['旅梦开发团', '2664871913601613', 'https://juejin.cn/user/2664871913601613'];
const [name, id, website] = details;
console.log(name, id, website);
// 数据什么意思？
// 如何分教练， 球员？
const team = ['拜伦·斯科特', '勒布朗 詹姆斯', '安东尼 戴维斯', '拉塞尔 威斯布鲁克'];
const [captain, assistant, ...players] = team;

const data = 'Basketball,Sports,90210,23,wes,bos,cool';
const [itemName, category, sku, inventory] = data.split(',')