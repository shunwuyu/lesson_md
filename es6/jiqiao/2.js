// 合并多个对象
const city = {
    name: 'Chongqing',
    population: '1,234,567,890'
}
const location = {
    longitude: '116.4',
    latitude: '39.9'
}
const fullCity = { ...city, ...location }