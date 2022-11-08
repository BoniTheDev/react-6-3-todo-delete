// Write your code here

import './index.css'

const TodoItem = props => {
  const {todo, deleteTodoItem} = props

  const {title, id} = todo

  const onDelete = () => {
    deleteTodoItem(id)
  }

  return (
    <li className="each-todo-item-card">
      <p className="todo-description">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
