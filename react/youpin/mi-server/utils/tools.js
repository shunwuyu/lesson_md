// 获取产品基本信息
function queryProductInfo(req, id) {
	return req.$PRODUCT_DATA.find(item => {
		return parseInt(item.id) === parseInt(id);
	});
}

module.exports = {
  queryProductInfo
}