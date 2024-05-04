import React, { useState } from 'react'

const TodoInput = (props) => {
    const {handleAddTodos,todoValue,setTodosValue} = props
    // const [todoValue,setTodosValue] = useState('')
  return (
    <header>
        <input value={todoValue} onChange={(e)=>{
            setTodosValue(e.target.value)
        }}   placeholder='Enter Todo....'/>
        <button onClick={() =>{
            handleAddTodos(todoValue)
            setTodosValue('')
        }}>Add</button>
    </header>
  )
}

export default TodoInput
