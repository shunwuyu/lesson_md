import Vue from 'vue'
import { Button,Table,TableColumn,Progress,Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Button) // 上传按钮
Vue.use(Progress) // 进度
Vue.use(Table) // 
Vue.use(TableColumn)
Vue.prototype.$message = Message;
