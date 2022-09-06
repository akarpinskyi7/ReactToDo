import React, { Component } from 'react'
import TodoItem from './TodoItems'

class TodoList extends Component {
  render() {
    return (
      <ul className="todo__list">
        {
          this.props.todos.map((todo) => {
              return <TodoItem key={todo.id} todo={todo} actions=
                {this.props.actions}/>
          })
        }
      </ul>
    )
  }
}
export default TodoList
