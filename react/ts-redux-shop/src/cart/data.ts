const cartData = Array(5)
	.fill(undefined)
	.map((e, index) =>
		({ id: index, name: `商品${index}`, price: Math.round(Math.random()*100) }))
export default cartData