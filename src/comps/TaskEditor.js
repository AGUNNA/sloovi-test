import React, { useEffect, useState } from 'react';
import "../styles/taskmanager.css";
import { Button, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addtask, deletetask, updatetask } from '../redux/tasksSlice';
import { Delete } from '@mui/icons-material';
import { useSelector } from 'react-redux'

function TaskEditor({setEditing, updateMode, setUpdateMode, updateItem, setUpdateItem, idcounter, setIdCounter}) {

    const [assign, setassign] = useState()
    const user = useSelector(state => {
        return state.user
    })

    useEffect(() => {
        getassigneduser()
    }, [])
    const [taskItem, setTaskItem] = useState({
        name: '',
        date: '',
        time: ''
    })

    const getassigneduser = async () => {
        const response = await fetch(`https://stage.api.sloovi.com/team?product=outreach&company_id=${user.company_id}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + `user.token`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',          
            },
            mode: 'no-cors'
        })
        // const data = await response.json()
        console.log(response)
    }

    useEffect(() => {
        if(updateItem === {}) return

        setTaskItem(updateItem)
    }, [])


    const dispatch = useDispatch()

    const addtodo = () => {
        if (taskItem.name === '') return
        dispatch(addtask({
            task: {...taskItem, id: idcounter}
        }))
        setIdCounter(idcounter + 1)
        setEditing(false)
    }

    const updatetodo = () => {
        if (taskItem.name === '') return

        console.log(updateItem)
        dispatch(updatetask({
            id: idcounter,
            task: taskItem
        }))
        setUpdateMode(false)
        setUpdateItem({})
        setEditing(false)
    }

    return (
        <div className='taskmanager_container'>
            <div className='task_description'>
                <span style={{fontSize: 14, fontWeight: '500'}}>Task Description</span>
                <input 
                    type={'text'}
                    value={taskItem.name}
                    onChange={(e) => setTaskItem({...taskItem, name: e.target.value})}
                />
            </div>
            <div className='task_datetime' style={{ marginTop: 6}}>
                <div className='task_date'>
                    <span style={{fontSize: 14, fontWeight: '500'}}>Date</span>
                    <input 
                        type={'date'}
                        value={taskItem.date}
                        onChange={e => setTaskItem({...taskItem, date: e.target.value})}
                    />
                </div>
                <div className='task_time'>
                    <span style={{fontSize: 14, fontWeight: '500'}}>Time</span>
                    <input 
                        type={'time'}
                        value={taskItem.time} 
                        onChange={e => setTaskItem({...taskItem, time: e.target.value})}/>
                </div>
            </div>
            <div className='task_assign' style={{ marginTop: 6}}>
                <span style={{fontSize: 14, fontWeight: '500'}}>Assign User</span>
                <select>
                    <option>Prem Kumar</option>
                </select>
            </div>
            <div className='task_btn'>
                {updateMode && (
                    <IconButton style={{ alignContent: 'flex-start'}} onClick={() => {
                        dispatch(deletetask({
                            id: taskItem.id
                        }))
                        setEditing(false)
                    }}>
                        <Delete />
                    </IconButton>
                )}
                <div>
                    <Button 
                        variant="text"
                        onClick={() => {
                            updateMode && setUpdateMode(false)
                            updateMode && setUpdateItem({})
                            setEditing(false)
                        }}
                    >
                        Cancel
                    </Button>
                    <Button 
                        variant="contained" 
                        color="success"
                        onClick={
                            () => {
                                updateMode? updatetodo() : addtodo()
                            }
                        }
                    >
                            Save
                    </Button>
                </div>
                
            </div>
            </div>
    )
}

export default TaskEditor