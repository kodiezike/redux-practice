import {createSlice} from "@reduxjs/toolkit"; //allows you to create reducers, to split logic and easily access values

const initialStateValue = "";
export const themeSlice = createSlice({   //this contains the information of reducer, actions to perform, actual name of state 
    name: 'theme', //name of the state
    initialState: {value: initialStateValue },
    reducers:{ //reducer functions
        changeColor: (state, action) =>{ //payload is an object that changes the value of a variable
            state.value = action.payload;
        },
        
    }
})


export const {changeColor} = themeSlice.actions  //export action

export default themeSlice.reducer;