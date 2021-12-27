import React from 'react'

function TodoListItem({text}) {
    return (
        <li  aria-label='list-item'>
            {text.toString()}
        </li>
    )
}

export default TodoListItem
