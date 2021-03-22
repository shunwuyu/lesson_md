import React from 'react';
import ReactDOM from 'react-dom';
import { List, Map } from  'immutable';
import { createStore }  from 'redux';
import { Provider, connect } from 'react-redux'; 
import './index.css'

const init = List();
const reducer = function(state=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return state.push(
        Map(action.payload)
      );
    case 'TOGGLE_TODO':
      return state.map(t => {
        if(t.get('id') == action.payload) {
          return t.update('isDone', isDone => !isDone);
        } else {
          return t;
        }
      });
    default:
      return state;
  }
}

const components = {
  Todo({todo }) {
    if(todo.isDone) {
      return <strike>{todo.text}</strike>;  
    } else {
      return <span>{todo.text}</span>;
    }
  },
  TodoList({todos, toggleTodo, addTodo}) {
    const onSubmit = (e) => {
      const text = e.target.value;
      if(e.which === 13 && text.length > 0) {
        addTodo(text);
        e.target.value = '';
      }
    }
    const { Todo } = components;
    const toggleClick = (id) => () => toggleTodo(id);
    return (
      <div className='todo'>
        <input type='text'
               className='todo__entry'
               placeholder='Add todo'
               onKeyDown={onSubmit} />
        <ul className='todo__list'>
          {
            todos.map(t => (
              <li
              key={t.get('id')}
              className='todo__item'
              onClick={toggleClick(t.get('id'))}>
               <Todo todo={t.toJS()} />
              </li>  
            ))
          }
        </ul>
      </div>
    )
  }
}

const actions = {
  addTodo(text) {
    return {
      type: 'ADD_TODO',
      payload: {
        id: Math.random().toString(34).slice(2),
        isDone: false,
        text
      }
    };
  },
  toggleTodo(id) {
    return {
      type: 'TOGGLE_TODO',
      payload: id
    }
  }
}


const containers = {
  TodoList: connect(
    function mapStateToProps(state) {
      return {
        todos: state
      }
    },
    function mapDispatchToProps(dispatch) {
      return {
        toggleTodo: (id) => dispatch(actions.toggleTodo(id)),
        addTodo: (text) => dispatch(actions.addTodo(text))
      }
    }
  )(components.TodoList)
}

const { TodoList } = containers;

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('root')
);