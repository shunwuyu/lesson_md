import React, { useState } from 'react'
import Note from './Note'

const Notes = () => {
    const [entities, setEntities] = useState([]);
    const noteItems = entities.map((entity, index) =>
      <Note
        key={ entity.index }
        entity={ entity }
        destroyEntity={ destroyEntity }
       />
    )

    const createEntity = () => {
        
    }
    return (
        <div className="ui container notes">
            <h4 className="ui horizontal divider header">
                <i className="paw icon"></i>
                Ninghao Notes App _ React.js
            </h4>
            <button className="ui right floated basic violet button"
            onClick={ createEntity }>
                添加笔记
            </button>
            <div className="ui divided items">
                { noteItems }
                { !entities.length &&
                <span className="ui small disabled header">
                还没有笔记，请按下 '添加笔记' 按钮。
                </span>
                }
            </div>
        </div>
    )
}

export default Notes