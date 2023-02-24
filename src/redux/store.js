import { configureStore } from "@reduxjs/toolkit";
import addToList from '../../src/redux/Slice'

const store = configureStore({
    reducer: {
        storeToList: addToList,
    },
})

export default store