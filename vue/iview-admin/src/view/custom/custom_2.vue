<template>
  <div>
    <tables
      ref="tables"
      editable
      searchable
      search-place="top"
      v-model="tableData"
      :columns="columns"
    />
  </div>
</template>
<script>
import Tables from '_c/tables'
import { getCommentData } from '@/api/data'
export default {
  data () {
    return {
      columns: [
        {
          title: 'nickname',
          key: 'nickname'
        },
        {
          title: 'avatarUrl',
          key: 'avatarUrl',
          render: (h, obj) => {
            return h('img', {
              attrs: {
                src: obj.row.avatarUrl
              },
              style: {
                width: '40px',
                height: '40px'
              }
            })
          }
        },
        {
          title: 'content',
          key: 'content'
        },
        {
          title: 'likedCount',
          key: 'likedCount'
        }
      ],
      tableData: []
    }
  },
  components: {
    Tables
  },
  mounted () {
    this.fetch()
  },
  methods: {
    fetch () {
      getCommentData().then(res => {
        this.tableData = res.data.hotComments.map((com) => {
          const { nickname, avatarUrl } = com.user
          return {
            ...com,
            nickname,
            avatarUrl
          }
        })
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
<style scoped>
</style>
