import { createReducer } from "@reduxjs/toolkit";

const intialState = { 
    isAuthenticated : false,
   
}


export const userReducer = createReducer(intialState,{
     LoginRequest:(state) =>{
        state.loading = true;
     },
     LoginSuccess:(state, action)=>{
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
     },
     Loginfailure:(state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
     },

 
      
     RegisterRequest:(state) =>{
        state.loading = true;
     },
     RegisterSuccess:(state, action)=>{
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
     },
     Registerfailure:(state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
     },


     LoadUserRequest:(state) =>{
        state.loading = true;
     },
     LoadUserSuccess:(state, action)=>{
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
     },
     LoadUserfailure:(state, action)=>{
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
     },










     LogoutUserRequest:(state) =>{
      state.loading = true;
   },
   LogoutUserSuccess:(state)=>{
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
   },
   LogoutUserfailure:(state, action)=>{
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = true;
   },
     







     clearErrors:(state)=>{
      state.error = null;
         },
      
})



export const postofFollowingReducer = createReducer({}, {
   postOfFollowingRequest :(state)=>{
      state.loading = true; 
   },

   postOfFollowingSuccess:(state, action)=>{
      state.loading = false;
      state.posts = action.payload;
   },

   postFollowingFailure:(state, action)=>{
      state.loading = false;
      state.error = action.payload;

   },

   clearErrors:(state)=>{
state.error = null;
   },

})



export const  allUserReducer = createReducer({}, {
   allUserRequest :(state)=>{
      state.loading = true; 
   },

   allUserSuccess:(state, action)=>{
      state.loading = false;
      state.user = action.payload;
   },

   allUserFailure:(state, action)=>{
      state.loading = false;
      state.error = action.payload;

   },

   clearErrors:(state)=>{
state.error = null;
   },

})





