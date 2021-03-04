import React, { Component } from 'react'
import moment from 'moment'
import 'moment/locale/zh-cn'
import _ from 'lodash'
moment.locale('zh-CN')

class Note extends Component {
  state = {
    entity: this.props.entity,
    destroyEntity: this.props.destroyEntity,
    updated: this.props.entity.meta.updated || this.props.entity.meta.created,
    body: this.props.entity.body,
  }

  header () {
    return _.truncate(this.state.body, { length: 30 }) || '新建笔记'
  }
  
  updated () {
    return moment(this.state.updated).fromNow()
  }

  words() {
    return this.state.body.length
  }


  render () {
    return (
      <div className="item">
        <div className="meta">
          { this.updated() }
        </div>
        <div className="content">
          <div className="header" onClick={this.toggle}>
            { this.header() }
          </div>
          <div className="extra">
            { this.words() } 字
          </div>
        </div>
      </div>
    )
  }
}

export default Note;