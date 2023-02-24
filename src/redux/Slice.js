import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        id: '2',
        task: 'task my',
        date: '01/02/2023'
    },
    {
        id: '5',
        task: 'test 1',
        date: '07/02/2023'
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
                date: action.payload.date
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
                date: action.payload.date
            }]
        },
        removeSelected: (state, action) => {
            console.log(action);
            
        },
    }

})

export const { addToList, removeFromList, duplicateItem, updateItem, removeSelected } = counterSlice.actions
export default counterSlice.reducer