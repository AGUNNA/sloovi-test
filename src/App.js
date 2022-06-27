import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import TaskManager from './comps/TaskManager';
// import { addtask } from './redux/tasksSlice';
import { setuser } from './redux/userSlice';

function App() {
  useEffect(() => {
    getuser()
    dispatch(setuser({
      user
    }))
  }, [])

    const currentuser = useSelector(state => {
      return state.user
    })

    const userinfo = {
      email : "smithwills1989@gmail.com",
      password : "12345678"
    }

    const dispatch = useDispatch()

    const [user, onchange] = useState({})


    const getuser = async () => {
      let response = await fetch('https://stage.api.sloovi.com/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',          
        },
        body: JSON.stringify(userinfo)
      })
      
      let data = await response.json()
      
      console.log(data.results)
      // getTasks()
      
      dispatch(setuser({
        user: data.results
      }))
    }

    const getTasks = async () => {
      const response = await fetch(`https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${currentuser.company_id}`, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + currentuser.token,
          'Accept': 'application/json',
          'Content-Type': 'application/json',    
          'Access-Control-Allow-Origin': '*'
        },
      })
      const data = await response.json()
      console.log(data)

      // dispatch(addtask({
      //   tasks: data.results
      // }))
    }
    return (
      <div className="App">       
        <TaskManager />
      </div>
    );
}

export default App;
