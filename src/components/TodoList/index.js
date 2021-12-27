import React from 'react'

function TodoList({children,type}) {
    return (
        <ul aria-label='todo-list' type={type.toString()}>
            {children}
        </ul>
    )
}

export default TodoList;
