const Controller = require('egg').Controller;

/**
* @controller BookController（ 注释必写，swagger-doc是根据这段注释来生成接口的 ）。
*/
class BookController extends Controller {
    /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
    * @summary 根据ID查询信息。
    * @description 根据ID查询信息。
    * @router get /version01/controllers/selectById （ get 表示设置请求为 get 请求，最后的 selectById 对应下面的 selectById 方法 ）。
    * @request query integer Id 需要去查新的ID。（ get 对应 query 请求，请求值设定为 integer 纯数字类型，ID 为请求的字段，注意大小写，和下面的方法要一一对应，不然会报错 ）。
    * @response 200 JsonBody 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
    */
    async selectById () {
        const ctx = this.ctx; // 当前请求的上下文 Context 对象的实例，通过它我们可以拿到框架封装好的处理当前请求的各种便捷属性和方法。
        const service = this.service; // 应用定义的 Service，通过它我们可以访问到其他业务层，等价于 this.ctx.service 。

        const param = ctx.query; // 获取请求参数。
        const result = await service.book.selectById(param.Id); // 查找 service/book.js 下的 selectById 方法。

        this.JsonBody(result);
    }

    /*
     * 对返回的数据结果进行封装。
     */
    JsonBody (data) {
        this.ctx.body = {
            result: data,
        };
    }
}

module.exports = BookController;