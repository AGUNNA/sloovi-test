import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ListItem from './ListItem'

function TaskList({setEditing, setUpdateMode, setUpdateItem}) {
    const tasks = useSelector(state => {
        return state.tasks
    })
    useEffect(() => {
        console.log(tasks)
    }, [])
    return (
        <div>
            <ul style={{ margin: 0, padding: 0,}}>
                {tasks?.map((task, index) => (
                    <ListItem 
                        key={index}
                        avatar={task.avatar}
                        name={task.name}
                        date={task.date}
                        setEditing={setEditing}
                        setUpdateMode={setUpdateMode}
                        setUpdateItem={setUpdateItem}
                        item={task}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TaskList