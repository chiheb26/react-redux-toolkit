import {createSlice} from '@reduxjs/toolkit'
initialState = {
    numofCakes : 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState, //initilState : initialState
    reducers : {
        ordered : (state)=>{
            state.numofCakes--
        },
        restocked: (state,action)=>{
            state.numofCakes += action.payload
        }
    }
})

export default cakeSlice.reducer
export const {ordered,restocked} = cakeSlice.actions