import React from 'react'
import s from './Header.module.css'
import { Row, Col } from 'react-bootstrap'

function Header() {
  return (
    <Row>
      <Col>
        <div className={s.root}>TODO LIST</div>
      </Col>
    </Row>
  )
}

export default Header
