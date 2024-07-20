import React, { useEffect, useState } from 'react'
import './Task.css'

const Task = ({ item, index, todo, setTodo, setInputValue, isCompleted }) => {

    const handleEdit = () => {
        setTodo(todo.filter((e, i) => {
            if (i == index)
                setInputValue(e.inputValue)
            return i !== index
        }))
    }

    const handleDelete = () => {
        setTodo(() => todo.filter((e, i) => i !== index))
        localStorage.setItem("list", JSON.stringify(todo))
    }

    const handleCheck = () => {
        let newList = [...todo];
        newList[index].isCompleted = !(newList[index].isCompleted);
        setTodo(newList)
    }

    return (
        <>
            <div className="myList">
                <div className='list-content'>
                    <input type="checkbox" id="check" checked={item.isCompleted} onChange={handleCheck} />
                    <div style={{ textDecoration: item.isCompleted ? "line-through" : "none" }}>{item.inputValue}</div>
                </div>

                <div className='icons'>
                    <img src="/src/assets/edit.png" onClick={handleEdit} />
                    <img src="/src/assets/delete.png" onClick={handleDelete} />
                </div>
            </div>
        </>
    )
}

export default Task