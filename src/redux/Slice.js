import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: '2',
        task: 'task my',
        date: '01/02/2023',
        complete: false
    },
    {
        id: '5',
        task: 'test 1',
        date: '07/02/2023',
        complete: false
    },
]

const counterSlice = createSlice({
    name: "AddToTodo",
    initialState,
    reducers: {
        addToList: (state, action) => {
            return [...state, {
                id: action.payload.id,
                task: action.payload.task,
                date: action.payload.date,
                complete: action.payload.complete
            }]
        },
        removeFromList: (state, action) => {
            const removeItem = state.filter((item, index) => item.id !== action.payload)
            return removeItem
        },
        duplicateItem: (state, action) => {
            return [...state, {
                id: action.payload.id,
                task: action.payload.task,
                date: action.payload.date,
                complete: false
            }]
        },
        removeSelected: (state, action) => {
            const newTodos = [...state]
            newTodos.forEach((todo, index) => {
                if (todo.id === action.payload.id) {
                    todo.complete = action.payload.complete
                }
            })
            state = newTodos

        },
        deleteSelected: (state, action) => {

            const data = state.filter(todo => todo.complete === false)
            return data


        },
        updateItem: (state, action) => {
            const newTodos = [...state]
            newTodos.forEach((todo, index) => {
                if (todo.id === action.payload.id) {
                    todo.task = action.payload.task
                }
            })
            state = newTodos
        }
    }

})

export const { addToList, removeFromList, deleteSelected, duplicateItem, updateItem, removeSelected } = counterSlice.actions
export default counterSlice.reducer