import {createSlice, dispatch} from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
    name : "ALL_CHARACTERS",
    initialState : {
        allItems: [],
        allItemFiltered:[]
    },
    reducers:{
        getAllCharacters(state,action){
            state.allItems = action.payload
            state.allItemFiltered = action.payload
        }
    }
});

export const getAllCharacters = ()=> async(dispatch) => {
    try {
        var json = await axios.get("http://192.168.0.106:3001/characters/getCharacters")
        dispatch(userSlice.actions.getAllCharacters(json.data))

    } catch (e) {
        console.log(e)
    }
}   


export default userSlice.reducer