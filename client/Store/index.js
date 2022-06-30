import {configureStore} from '@reduxjs/toolkit';
// import {combineReducers} from 'redux';
import userSlice from "../Reducers/index.js";

const store =configureStore({
    reducer:{
        ALL_CHARACTERS : userSlice
    }
})
export default store

