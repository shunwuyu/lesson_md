import React, { useState, useEffect } from 'react'
import Note from './Note'
import Editor from './Editor'
import { loadCollection, db } from '../database'

const Notes = () => {
    // MVVM
    const [notes, setNotes] = useState([
        // {body: 'hello~'},
        // {body: '你好~'}
    ])
    const destroyEntity = (entry) => {
        // console.log(entry)
        // 不是这一项的就留下 filter
        const _entities = notes.filter(
            item => item.body !== entry.body
        )
        // console.log(_entities)
        setNotes(_entities)
        loadCollection('notes')
            .then((collection) => {
                collection.remove(entry)
                db.saveDatabase()
            })
        // setState
    }
    const noteItems = notes.map(
        (note, index) => 
            <Note 
                key={note.$loki}
                entity={note}
                destroyEntity={destroyEntity}/>
    )
    const updateEntity = (event) => {
        console.log(event, '------------')
    }

    const createEntity = () => {
        loadCollection('notes')
            .then((collection) => {
                const entity = collection.insert({
                    body: ''
                })
        
                db.saveDatabase()
                setNotes([
                    entity,
                    ...notes
                ])
            })
    }

    const getInitialData = () => {
        loadCollection('notes')
            .then((collection) => {
                // collection.insert([
                //   { body: 'hello ~' },
                //   { body: 'hola ~' }
                // ])
                // db.saveDatabase()
                const entities = collection.chain()
                    .find()
                    .simplesort('$loki', 'isdesc')
                    .data()
                setNotes(entities)
            })
    }

    useEffect(() => {
        getInitialData()
    }, [])

    return (
        <div className="ui container notes">
            <h4 className="ui horizontal divider header">
                <i className="paw icon" />
                Notes App _ React.js
            </h4>
            <button 
                onClick={createEntity} 
                className="ui right floated basic violet button">
            添加笔记
            </button>
            <div className="ui divided items">
            {noteItems}
            </div>
            <Editor updateEntity={updateEntity} />
        </div>
    )
}

export default Notes;