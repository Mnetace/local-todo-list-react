import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import s from './TodoFilter.module.css'

function TodoFilter({ setFilteredItems, todo }) {
  function todoFilter(status) {
    setFilteredItems(
      status === undefined
        ? todo
        : todo.filter((item) => item.status === status)
    )
  }

  return (
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
  )
}

export default TodoFilter
