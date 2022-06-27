import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTYzMjUyODcsIm5iZiI6MTY1NjMyNTI4NywianRpIjoiY2ExZTQxYTQtMDFhMS00ODMzLTljNGYtYzYxZWZhNjFhNDAwIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.aefres27NaGKrNOmw4-VZ8bcPnhELyRztOy8bklw6Rc",
        company_id: 'company_413ef22b6237417fb1fba7917f0f69e7',
        user_id: 'user_4ee4cf67ad474a27988bc0afb84cf472'
    },
    reducers:{
        setuser: (state, action) => {
            const newuser = action.payload.user
            console.log(newuser)
            return newuser
        }
    }
});
export const {setuser} = userSlice.actions

export default userSlice.reducer