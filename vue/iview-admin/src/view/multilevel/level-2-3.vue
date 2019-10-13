<template>
  <div>多级菜单 -> 二级-3
    <div>
      <Card>
      <tables ref="tables" v-if="viewAccessAll" editable searchable search-place="top" v-model="commentData" :columns="columns" @on-delete="handleDelete"/>
      <tables ref="tables" editable searchable search-place="top" v-model="commentData" :columns="columns" @on-delete="handleDelete"/>
    </Card>
    </div>

  </div>
</template>
<script>
import Tables from '_c/tables'
import { getCommentData } from '@/api/data'
import { hasOneOf } from '@/libs/tools'
export default {
  name: 'level_2_3',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        { title: 'nickname', key: 'nickname', sortable: true },
        { title: 'avatarUrl',
          key: 'avatarUrl',
          render: (h, data) => {
            return h('img', {
              attrs: {
                src: data.row.avatarUrl
              },
              style: {
                width: '40px',
                height: '40px'
              }
            })
          } },
        { title: 'content', key: 'content' },
        { title: 'likedCount', key: 'likedCount' },
        {
          title: 'Handle',
          key: 'handle',
          options: ['delete'],
          button: [
            (h, params, vm) => {
              return h('Poptip', {
                props: {
                  confirm: true,
                  title: '你确定要删除吗?'
                },
                on: {
                  'on-ok': () => {
                    console.log('params', params)
                    vm.$emit('on-delete', params)
                    vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
                  }
                }
              }, [
                h('Button', '自定义删除')
              ])
            }
          ]
        }
      ],
      commentData: []
    }
  },
  computed: {
    access () {
      console.log('this.$store.state.user.access', this.$store.state.user.access)
      return this.$store.state.user.access
    },
    viewAccessAll () {
      return hasOneOf(['admin1'], this.access)
    }
  },
  mounted () {
    getCommentData().then(res => {
      console.log(res.data.hotComments)
      this.commentData = res.data.hotComments.map(comment => {
        const { nickname, avatarUrl } = comment.user
        return {
          ...comment,
          nickname,
          avatarUrl
        }
      })
    })
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    }
  }
}
</script>
