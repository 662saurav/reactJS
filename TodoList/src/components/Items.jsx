import React from 'react'
import './Items.css'

const Items = () => {
    return (
        <>
            <div className="myList">
                <div className='list-content'>
                    <input type="checkbox" id="check" />
                    <div>Be consistent</div>
                </div>

                <div className='icons'>
                    <img src="/src/assets/edit.png" />
                    <img src="/src/assets/delete.png" />
                </div>
            </div>
        </>

    )
}

export default Items
