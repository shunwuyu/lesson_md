import React, {useEffect, useState} from 'react'
import moment from 'moment'
import 'moment/locale/zh-cn'
import _ from 'lodash'
import Editor from './Editor'
import { loadCollection, db } from '../database'
moment.locale('zh-CN')

const Note = (props) => {
    const { entity, destroyEntity } = props
    const { meta } = entity
    const [open, setOpen] = useState(false)
    const [body, setBody] = useState(entity.body)
    function updated () {
        return moment(meta.updated || meta.created).fromNow()
    }

    function header () {
        return _.truncate(body, { length: 30 }) || '新建笔记'
    }

    function toggle () {
        setOpen(!open)
    }

    function words() {
        return body.length
    }

    function updateEntity (event) {
        const _body = event.target.value
        setBody(_body)
        loadCollection('notes')
            .then((collection) => {
                entity.body = _body
                collection.update(entity)
                db.saveDatabase()
            })
    }
        
    return (
        <div className="item">
            <div className="meta">
                { updated() }
            </div>
            <div className="content">
                <div className="header" onClick={toggle}>
                {header()}
                </div>
            </div>
            <div className="extra">
                { open &&
                <Editor entity={ entity }
                    updateEntity={ updateEntity } />
                }
                { words() } 字
                {open&& <i 
                    className="right floated trash outline icon" 
                    onClick={() => destroyEntity(entity)}
                />}
            </div>
        </div>
    )
}

export default Note;