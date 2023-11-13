import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LoginRequest",
    });

    const { data } = await axios.post("/api/v1/login", { email, password }, {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "LoginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoginFailure",
      payload: error.response.data.message,
    });
  }
};



export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadUserRequest",
    });

    const { data } = await axios.get("/api/v1/me");

    dispatch({
      type: "LoadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LoadUserfailure",
      payload: error.response.data.message,
    });
  }
};





export const getFollowingPosts = ()=> async(dispatch)=>{
  try {
    
    dispatch({
        type:"postOfFollowingRequest",
    });



    const {data} = await axios.get("/api/v1/posts");



    dispatch({
      type:"postOfFollowingSuccess",
      payload:data.posts,
  });


    

  } catch (error) {
    dispatch({
      type: "postOfFollowingFailure",
      payload: error.response.data.message,
    });
  }
}


export const getAllUsers = ()=> async(dispatch)=>{
  try {
    
    dispatch({
        type:"allUserRequest",
    });



    const {data} = await axios.get("/api/v1/users");



    dispatch({
      type:"allUserSuccess",
      payload:data.users,
  });


    

  } catch (error) {
    dispatch({
      type: "allUserFailure",
      payload: error.response.data.message,
    });
  }
}




export const getMyPosts = ()=> async(dispatch)=>{
  try {
    
    dispatch({
        type:"myPostsRequest",
    });



    const {data} = await axios.get("/api/v1/my/posts");



    dispatch({
      type:"myPostsSuccess",
      payload:data.posts,
  });


    

  } catch (error) {
    dispatch({
      type: "myPostsFailure",
      payload: error.response.data.message,
    });
  }
}






export const logoutUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LogoutUserRequest",
    });

  await axios.get("/api/v1/logout")
    dispatch({
      type: "LogoutUserSuccess", 
    });
  } catch (error) {
    dispatch({
      type: "LogoutUserfailure",
      payload: error.response.data.message,
    });
  }
};




// export const registerUser = (avatar, name, email, password) => async (dispatch) => {
//   try {
//     dispatch({
//       type: "RegisterRequest",
//     });

//     const { data } = await axios.post("/api/v1/register", { avatar, name, email, password }, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     dispatch({
//       type: "RegisterSuccess",
//       payload: data.user,
//     });
//   } catch (error) {
//     dispatch({
//       type: "Registerfailure",
//       payload: error.response.data.message,
//     });
//   }
// };


export const registerUser =
  (name, email,password, avatar) => async (dispatch) => {
    try {
      dispatch({
        type: "RegisterRequest",
      });

      const { data } = await axios.post(
        "/api/v1/register",
        { name, email, password, avatar },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "RegisterSuccess",
        payload: data.user,
      });
    } catch (error) {
      dispatch({
        type: "RegisterFailure",
        payload: error.response.data.message,
      });
    }
  };




  export const updateProfile =
  (name, email, avatar) => async (dispatch) => {
    try {
      dispatch({
        type: "updateProfileRequest",
      });

      const { data } = await axios.put(
        "/api/v1/update/profile",
        { name, email, avatar },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "updateProfileSuccess",
        payload: data.message,
      });
    } catch (error) {
      dispatch({
        type: "updateProfileFailure",
        payload: error.response.data.message,
      });
    }
  };







  export const updatePassword =
  (oldPassword, newPassword) => async (dispatch) => {
    try {
      
      dispatch({
        type: "updatePasswordRequest",
      });

      const { data } = await axios.put(
        "/api/v1/update/password",
        { oldPassword, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: "updatePasswordSuccess",
        payload: data.message,
      });


    } catch (error) {
      dispatch({
        type: "updatePasswordFailure",
        payload: error.response.data.message,
      });
    }
  };



  export const deleteMyProfile =
  () => async (dispatch) => {
    try {
      
      dispatch({
        type: "deleteProfileRequest",
      });

      const { data } = await axios.delete("api/v1/delete/me")

      dispatch({
        type: "deleteProfileSuccess",
        payload: data.message,
      });


    } catch (error) {
      dispatch({
        type: "deleteProfileFailure",
        payload: error.response.data.message,
      });
    }
  };