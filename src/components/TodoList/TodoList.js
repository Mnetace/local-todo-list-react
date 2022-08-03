import React, { useEffect, useState } from 'react'
// import { Button } from 'react-bootstrap'
import s from './TodoList.module.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faSave,
//   faTrash,
//   faEdit,
//   faLock,
//   faLockOpen,
// } from '@fortawesome/free-solid-svg-icons'
import TodoFilter from '../TodoFilter/TodoFilter'
import TodoItem from '../TodoItem/TodoItem'

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')
  const [filteredItems, setFilteredItems] = useState(todo)

  useEffect(() => {
    setFilteredItems(todo)
  }, [todo])

  function deleteTodo(id) {
    setTodo(todo.filter((item) => item.id !== id))
  }

  function switchItemStatus(id) {
    const item = todo.find((item) => item.id === id)
    if (item) {
      item.status = !item.status
      setTodo([...todo])
    }
  }

  function editTodo(id, title) {
    setEdit(id)
    setValue(title)
  }

  function saveTodo(id) {
    const item = todo.find((item) => item.id === id)
    if (item) {
      item.title = value
      setTodo([...todo])
      setEdit(null)
    }
  }

  return (
    <div>
      <TodoFilter setFilteredItems={setFilteredItems} todo={todo} />
      {filteredItems.map((item) => (
        <div className={s.listItems}>
          <TodoItem
            deleteTodo={deleteTodo}
            switchItemStatus={switchItemStatus}
            editTodo={editTodo}
            saveTodo={saveTodo}
            item={item}
            edit={edit}
            value={value}
            setValue={setValue}
          />
        </div>
      ))}
    </div>
  )
}

export default TodoList
