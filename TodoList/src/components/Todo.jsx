import React, { useRef, useEffect, useState } from 'react'
import Task from './Task'
import './Todo.css'

const Todo = () => {
    const [inputValue, setInputValue] = useState('')
    const [todo, setTodo] = useState([])
    const inputRef = useRef()

    useEffect(() => {
        let list = localStorage.getItem("list");
        list ? setTodo(JSON.parse(list)) : [];
    }, [])

    useEffect(() => {
        if(inputRef.current)
            inputRef.current.focus();
    })
    
    useEffect(() => {
       localStorage.setItem("list", JSON.stringify(todo))
    }, [todo])
    
    const handleChange = (e) => setInputValue(e.target.value)
    
    const handleClick = () => {
        if (!inputValue.trim() !== '') {
            setTodo([...todo, inputValue])
            setInputValue('')
        }

    }

    const handleEnter = (e) => {
        if (e.key == 'Enter') {
            handleClick();
        }
    }  
    
    return (
        <div>
            <div className="todo">
                <div className="side-panel">
                    <ul>
                        <li className='bg-white'><h3>All</h3></li>
                        <li><h3>Pending</h3></li>
                        <li><h3>Completed</h3></li>
                    </ul>
                </div>

                <div className="main">
                    <div className='tophead'>
                        <h1>Todo List</h1>
                        <input type="text" placeholder='Enter new task' value={inputValue} onChange={handleChange} onKeyDown={handleEnter} ref={inputRef}/>
                        <button id='add-btn' onClick={handleClick}>Add</button>
                    </div>

                    <div className='items'>
                        {todo.map((item, index) => {
                            const myProps = {item, index, todo, setTodo, setInputValue}
                            return <Task key={index} {...myProps}/>
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Todo


