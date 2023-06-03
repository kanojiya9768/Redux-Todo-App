import { createSlice } from '@reduxjs/toolkit'

const TodoSlice = createSlice({
    name: 'Todo',
    initialState: {
        Edit: false,
        Todos: []
    },
    reducers: {
        addTodo(state, action) {
            state.Todos.push(action.payload)
            localStorage.setItem("Todos",JSON.stringify(state.Todos))
        },

        deleteTodo(state, action) {
            state.Todos.splice(action.payload, 1)
            localStorage.setItem("Todos",JSON.stringify(state.Todos))
        },

        changeEditStatus(state, action) {
            state.Edit = true;
        },

        editTodo(state, action) {
            state.Todos.splice(action.payload.id, 1, action.payload.newTodo);
            state.Edit = false;
            localStorage.setItem("Todos",JSON.stringify(state.Todos))
        }
    }
})

export default TodoSlice.reducer;
export const { addTodo, deleteTodo, changeEditStatus, editTodo } = TodoSlice.actions;