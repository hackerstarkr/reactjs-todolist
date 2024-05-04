import React from 'react'

export default function TodoCard(props) {
    const { children ,handleDeleteTodo ,index,handleEdittodo} = props
    return (
        <li className='todoItem' >
            {children}
            <div className='actionsContainer'>
                <button onClick={()=>{
                    handleEdittodo(index)
                }}>
                <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={()=>{
                    handleDeleteTodo(index)
                }}>
                <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </li>
    )
}

