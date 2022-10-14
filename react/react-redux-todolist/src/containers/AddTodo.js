import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        function asyncAdd(value) {
          return dispatch => {
            setTimeout(() => {
              // Yay! Can invoke sync or async actions with `dispatch`
              dispatch(addTodo(value));
            }, 2000);
          };
        }
        dispatch(asyncAdd(input.value));
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          async Add Todo
        </button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
