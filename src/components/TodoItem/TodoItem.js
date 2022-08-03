import React from 'react'
import { Button } from 'react-bootstrap'
import s from './TodoItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSave,
  faTrash,
  faEdit,
  faLock,
  faLockOpen,
} from '@fortawesome/free-solid-svg-icons'

function TodoItem({
  deleteTodo,
  switchItemStatus,
  editTodo,
  saveTodo,
  item,
  edit,
  value,
  setValue,
}) {
  return (
    <div key={item.id}>
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
          <Button className={s.btn} onClick={() => switchItemStatus(item.id)}>
            {item.status ? (
              <FontAwesomeIcon icon={faLock} />
            ) : (
              <FontAwesomeIcon icon={faLockOpen} />
            )}
          </Button>
        </div>
      )}
    </div>
  )
}

export default TodoItem
