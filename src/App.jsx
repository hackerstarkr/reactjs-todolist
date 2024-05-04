import { useState,useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([

    'GO to gym',
    'Eat the fruits',
    'Fuck the girls'
  ])
  const [todoValue, setTodosValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
      const newTodoList = todos.filter((todo,todoIndex)=>{
        return todoIndex !== index
      })
      persistData(newTodoList)
      setTodos(newTodoList)
  }

  function handleEdittodo(index){
      const valuetobeEdited=todos[index]
      setTodosValue(valuetobeEdited)
      handleDeleteTodo(index)
  }

  useEffect(()=>{
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  },[])
  return (
    <>
      <TodoInput todoValue={todoValue} setTodosValue ={setTodosValue}   handleAddTodos={handleAddTodos} />
      <TodoList  handleEdittodo={handleEdittodo} handleDeleteTodo={handleDeleteTodo}todos={todos} />
    </>
  )
}

export default App
