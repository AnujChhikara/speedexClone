import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'cart',
    initialState: {
        userData: []
    },
    reducers:{
        updateUser(state,action){
            const newUser = action.payload
            state.userData.push({
                fullName: newUser.fullName,
                email:newUser.email,
                gender:newUser.gender,
               avatar:newUser.avatar
            })

        }
        
       
    }
});


export const userActions = userSlice.actions;

export default userSlice;