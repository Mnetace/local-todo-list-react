import Header from './components/Header/Header'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

function App() {
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem('todo')
    const newTodo = JSON.parse(saved)
    if (Array.isArray(newTodo) === false) {
      let newArr = []
      return newArr
    }
    return newTodo
  })

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  return (
    <Container>
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  )
}

export default App
