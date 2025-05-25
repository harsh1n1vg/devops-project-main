import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Todo app state
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const addTodo = (e) => {
    e.preventDefault()
    if (input.trim()) {
      setTodos([...todos, { text: input, done: false }])
      setInput("")
    }
  }

  const toggleTodo = (idx) => {
    setTodos(
      todos.map((todo, i) =>
        i === idx ? { ...todo, done: !todo.done } : todo
      )
    )
  }

  const removeTodo = (idx) => {
    setTodos(todos.filter((_, i) => i !== idx))
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* Todo App */}
      <div className="todo-container">
        <h2>Todo App</h2>
        <form onSubmit={addTodo} className="todo-form">
          <input
            className="todo-input"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a new todo..."
          />
          <button className="todo-add-btn" type="submit">Add</button>
        </form>
        <ul className="todo-list">
          {todos.map((todo, idx) => (
            <li key={idx} className={todo.done ? "todo-done" : ""}>
              <span onClick={() => toggleTodo(idx)}>{todo.text}</span>
              <button className="todo-remove-btn" onClick={() => removeTodo(idx)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
