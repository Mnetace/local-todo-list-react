import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import s from './TodoList.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSave,
  faTrash,
  faEdit,
  faLock,
  faLockOpen,
} from '@fortawesome/free-solid-svg-icons'

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')
  const [filteredItems, setFilteredItems] = useState(todo)

  useEffect(() => {
    setFilteredItems(todo)
  }, [todo])

  function todoFilter(status) {
    setFilteredItems(
      status === undefined
        ? todo
        : todo.filter((item) => item.status === status)
    )
  }

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
      <Row>
        <Col className={s.filter}>
          <Button
            onClick={() => todoFilter(undefined)}
            variant="outline-primary"
            className={s.filterBtn}
          >
            All
          </Button>
          <Button
            onClick={() => todoFilter(true)}
            variant="outline-success"
            className={s.filterBtn}
          >
            Open
          </Button>
          <Button
            onClick={() => todoFilter(false)}
            variant="outline-danger"
            className={s.filterBtn}
          >
            Closed
          </Button>
        </Col>
      </Row>

      {filteredItems.map((item) => (
        <div key={item.id} className={s.listItems}>
          {edit === item.id ? (
            <div>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={(ev) => {
                  if (ev.key === 'Enter') {
                    saveTodo(item.id)
                  }
                }}
              />
            </div>
          ) : (
            <div className={!item.status ? s.close : ''}>{item.title}</div>
          )}

          {edit === item.id ? (
            <div>
              <Button onClick={() => saveTodo(item.id)}>
                <FontAwesomeIcon icon={faSave} />
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodo(item.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button
                className={s.btn}
                onClick={() => editTodo(item.id, item.title)}
              >
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button
                className={s.btn}
                onClick={() => switchItemStatus(item.id)}
              >
                {item.status ? (
                  <FontAwesomeIcon icon={faLock} />
                ) : (
                  <FontAwesomeIcon icon={faLockOpen} />
                )}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default TodoList
