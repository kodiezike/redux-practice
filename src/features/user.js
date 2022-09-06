import {createSlice} from "@reduxjs/toolkit"; //allows you to create reducers, to split logic and easily access values

const initialStateValue = {name: "", age: 0, email: ""};
export const userSlice = createSlice({   //this contains the information of reducer, actions to perform, actual name of state 
    name: 'user', //name of the state
    initialState: {value: initialStateValue },
    reducers:{ //reducer functions
        login: (state, action) =>{ //payload is an object that changes the value of a variable
            state.value = action.payload;
        },
        logout: (state) =>{state.value = initialStateValue}
    }
})


export const {login, logout} = userSlice.actions  //export action

export default userSlice.reducer;