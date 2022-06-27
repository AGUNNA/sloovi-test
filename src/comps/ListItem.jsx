import { Avatar } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import CheckIcon from '@mui/icons-material/Check';
import "../styles/listitem.css";
import { red } from '@mui/material/colors';

function ListItem({name, date, setEditing, setUpdateMode, setUpdateItem, item}) {
    
  return (
    <div className='listitem_contianer'>
        <div style={{display: 'flex' ,justifyContent: 'space-between', width: '35%'}}>
            <Avatar alt="avatar" src={require('../assets/avatar.jpeg')} />
            <div className='list_details'>
                <span style={{ fontWeight: '500',}}>{name}</span>
                <span style={{ fontSize: 12, color: 'red'}}>{date}</span>
            </div>
        </div>
        
        <div className='list_btns'>
            <IconButton sx={{border: "1px solid grey", borderRadius: 1}} onClick={() => {
                setUpdateMode(true)
                setUpdateItem(item)
                setEditing(true)
            }}>
                <EditIcon sx={{ fontSize: "large" }} />
            </IconButton>
            <IconButton sx={{border: "1px solid grey", borderRadius: 1}}>
                <NotificationAddIcon sx={{ fontSize: "large" }}/>
            </IconButton>
            <IconButton sx={{border: "1px solid grey", borderRadius: 1}}>
                <CheckIcon sx={{ fontSize: "large" }}/>
            </IconButton>
        </div>
    </div>
  )
}

export default ListItem