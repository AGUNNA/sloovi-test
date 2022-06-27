import React, { useState } from 'react';
import "../styles/taskmanager.css";
import TaskEditor from './TaskEditor';
import TaskList from './TaskList';
import { useSelector } from 'react-redux'

function TaskManager() {
    const [editing, setEditing] = useState(false)
    const [updateMode, setUpdateMode] = useState(false)

    const [updateItem, setUpdateItem] = useState({})
    const [idcounter, setIdCounter] = useState(300)

    const tasks = useSelector(state => {
        return state.tasks
    })

 
    return (
        <div className='task_container'>
            <div className='task_header'>
                <div>
                    <span className='task_title' style={{fontSize: 14, fontWeight: '500', marginLeft: 6}}>Tasks</span>
                    <span className='task_counter' style={{fontSize: 14, fontWeight: '500', marginLeft: 6}}>
                        {tasks?.length? tasks?.length : 0}
                    </span>
                </div>
                <button
                    className='task_IncrementBtn'
                    onClick={() => setEditing(true)}
                >
                +
                </button>
            </div>
            {editing ? (
                <TaskEditor 
                    setEditing={setEditing} 
                    updateMode={updateMode} 
                    setUpdateMode={setUpdateMode} 
                    updateItem={updateItem} 
                    setUpdateItem={setUpdateItem} 
                    idcounter={idcounter}
                    setIdCounter={setIdCounter}
                />
            ) : (
                <TaskList setEditing={setEditing} setUpdateMode={setUpdateMode} setUpdateItem={setUpdateItem}/>
            )}
        </div>
    )
}

export default TaskManager
