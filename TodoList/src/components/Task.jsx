import React, {useState} from 'react'
import './Task.css'

const Task = ({ item, index, todo, setTodo, setInputValue }) => {

    const [isChecked, setIsChecked] = useState(false)

    const handleEdit = () => {
        setTodo(todo.filter((e, i) => {
            if (i == index)
                setInputValue(e)
            return i !== index
        }))
    }

    const handleDelete = () => {
        setTodo(() => todo.filter((e, i) => i !== index))
        localStorage.setItem("list", JSON.stringify(todo))
    }

    return (
        <>
            <div className="myList">
                <div className='list-content'>
                    <input type="checkbox" id="check" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
                    <div style={{textDecoration: isChecked ? "line-through" : "none"}}>{item}</div>
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
