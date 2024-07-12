import React from 'react'
import Items from './Items'
import './Todo.css'

const Todo = () => {

    return (
        <div>
                <div className="todo">
                    <div className="side-panel">
                        <ul>
                            <li><h3>All</h3></li>
                            <li><h3>Pending</h3></li>
                            <li className='bg-white'><h3>Completed</h3></li>
                        </ul>

                    </div>

                    <div className="main">
                        <div className='tophead'>
                            <h1>Todo List</h1>
                            <input type="text" placeholder='Enter new task' />
                            <button id='add-btn'>Add</button>
                        </div>

                        <div className='item'>
                            <Items/>
                            <Items/>
                            <Items/>
                            <Items/>
                            <Items/>
                            <Items/>
                            <Items/>
                            <Items/>
                            <Items/>
                            <Items/>
                            <Items/>
                        </div>

                    </div>
                </div>
            
        </div>
    )
}

export default Todo


