import React, { useState } from 'react'
import { v4 } from 'uuid'
import { Row, Col, Button, FormControl } from 'react-bootstrap'
import s from './AddTodo.module.css'

function AddTodo({ addTodoItem }) {
  const [value, setValue] = useState('')

  function saveTodo() {
    if (value) {
      addTodoItem({
        id: v4(),
        title: value,
        status: true,
      });
      setValue('')
    }
  }

  return (
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl
          placeholder="Write a task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(ev) => {
            if (ev.key === 'Enter') {
              saveTodo()
            }
          }}
        />
        <Button className={s.btn} variant="outline-primary" onClick={saveTodo}>
          Save
        </Button>
      </Col>
    </Row>
  )
}

export default AddTodo
