const Service = require('egg').Service;

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class BookService extends Service {
    constructor(ctx) {
        super(ctx); // 调用父对象上的函数。
        this.tableName = 'Book'; // 数据库表名。
        this.database = this.ctx.model[this.tableName]; // 获取 model 下的表（ model 相当于数据库的表 ）。
    }

    /**
     * 根据Id获取表信息。
     * @param {*} id 
     */
    async selectById (id) {
        const result = await this.database.findByPk(id); // sequelize 内置查询方法。
        return result;
    }
}

module.exports = BookService;