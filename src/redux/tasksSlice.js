import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: [
        {
            avatar: require('../assets/avatar.jpeg'),
            name: 'Follow Up',
            date: new Date("2015/03/25").toLocaleDateString(),
            time: new Date(2018, 11, 24, 10, 33, 30, 0).toLocaleTimeString(),
            id: 100
        },
    ],
    reducers:{
        addtask: (state, action)=>{
            const newtask = action.payload.task
            state.push(newtask)
        },
        updatetask: (state, action) => {
            const all_tasks = [...state]
            const new_task = action.payload.task
            const old_task = all_tasks.find(t => t.id === action.payload.task.id)

            let updated_tasks = all_tasks.filter(t => t !== old_task)
            updated_tasks.push(new_task)



            return updated_tasks
        },
        deletetask: (state, action)=> {
            console.log(action.payload.id)
            return state?.filter(t => t.id !== action.payload.id)
        }
    }
});
export const {addtask, updatetask, deletetask} = tasksSlice.actions

export default tasksSlice.reducer