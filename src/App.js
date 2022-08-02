import Header from './components/Header/Header'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

function App() {
  const [todo, setTodo] = useState(() => {
    return JSON.parse(localStorage.getItem('todo')) ?? [];
  })

  function addTodoItem(item) {
      setTodo([...todo, item]);
  }

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
      console.log('update ls')
  }, [todo])

  return (
    <Container>
      <Header />
      <AddTodo addTodoItem={addTodoItem} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  )
}

export default App
