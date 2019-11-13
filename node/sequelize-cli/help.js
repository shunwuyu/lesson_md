const { SearchShopById, CreateShops } = require('./data')
 
module.exports = {
  findById : async (ctx)=>{
    const shop = await SearchShopById(ctx.params.id);
    ctx.body = {
      status: 0,
      data: shop
    }
  },
  createShop : async (ctx)=>{
    const shop = ctx.request.body
    shop.created_at = new Date();
    shop.updated_at = new Date();
    console.log(shop);
    await CreateShops(shop)
    ctx.body = {
      status: 0
    }
  }
};