import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        loggin:false,
        user: {
           id:false,
        },
    },
    userTurnos: []
};

export const userSlice = createSlice({
   name: "ActualUser",
   initialState,
   reducers:{
    setUserData: (state, action) => {
        state.userData = action.payload;
    },
    setTurnosUsuario: (state, action) => {
        state.userTurnos = action.payload;
    },
   },
});

export const {setUserData, setTurnosUsuario} = userSlice.actions;
export default userSlice.reducer;