import React from 'react'
import './Task.css'

const Task = ({ item, index, todo, setTodo, saveList, inputValue, setInputValue }) => {

    const handleEdit = () => {
        setTodo(todo.filter((e, i) => {
            if (i == index) 
                setInputValue(e)
            return i !== index
        }))

    }

    const handleDelete = () => {
        setTodo(() => todo.filter((e, i) => i !== index))
        saveList()
    }

    return (
        <>
            <div className="myList">
                <div className='list-content'>
                    <input type="checkbox" id="check" />
                    <div>{item}</div>
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
