const Koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

// 连接 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/todos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, '连接数据库失败'));
db.once('open', () => {
    console.log('成功连接到数据库');
});

const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean,
});
const Todo = mongoose.model('Todo', todoSchema);
// 创建 Koa 应用实例和路由器实例
const app = new Koa();

app.use(bodyParser());

const router = new Router({ prefix: '/api' });

router.get('/todos', async (ctx) => {
    const todos = await Todo.find({}, 'title');
    console.log(todos, '/////')
    ctx.body = todos;
  });
  
  // 创建一个新的 todo
  router.post('/todos', async (ctx) => {
    const { title, completed } = ctx.request.body;
    console.log(title, completed, '/////');
    const todo = new Todo({
      title,
      completed,
    });
    const newTodo = await todo.save();
    ctx.body = newTodo;
  });
  
  // 获取特定的 todo
  router.get('/todos/:id', async (ctx) => {
    const { id } = ctx.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      ctx.status = 404;
      ctx.body = 'Todo not found';
    } else {
      ctx.body = todo;
    }
  });
  
  // 更新特定的 todo
  router.put('/todos/:id', async (ctx) => {
    const { id } = ctx.params;
    const { title, completed } = ctx.request.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );
    if (!updatedTodo) {
      ctx.status = 404;
      ctx.body = 'Todo not found';
    } else {
      ctx.body = updatedTodo;
    }
  });
  
  // 删除特定的 todo
  router.delete('/todos/:id', async (ctx) => {
    const { id } = ctx.params;
    const deletedTodo = await Todo.findByIdAndRemove(id);
    if (!deletedTodo) {
      ctx.status = 404;
      ctx.body = 'Todo not found';
    } else {
      ctx.body = deletedTodo;
    }
  });
  
  // 初始化路由器中间件
  app.use(router.routes()).use(router.allowedMethods());
  
  // 启动服务器
  app.listen(3000, () => {
    console.log('服务器已启动，监听端口 3000');
  });
