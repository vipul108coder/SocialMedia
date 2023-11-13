// import React, { useEffect, useState } from 'react'
// import "./Register.css"
// import { useDispatch, useSelector } from 'react-redux';
// import { Avatar, Button, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { registerUser } from '../../Actions/User';
// import {useAlert} from "react-alert"

// const Register = () => {
//     const[name, setName] = useState();
//     const[email, setEmail] = useState();
//     const[password, setPassword] = useState();
//     const[avatar, setAvatar] = useState();
    

//     const dispatch = useDispatch();

//     const {loading, error} = useSelector((state)=>state.user);

//     const alert = useAlert();


//     const registerHandler = (e)=>{
//         e.preventDefault();
//          dispatch(registerUser(name, email, password, avatar));
//     }


//     const handleImage = (e)=>{
//         const file = e.target.files[0];
//         const Reader = new FileReader();
// Reader.onload=()=>{
//     if(Reader.readyState===2){
//         setAvatar(Reader.result);
//     }
// }
//         Reader.readAsDataURL(file);

//     }

    

//     useEffect(()=>{
//       if(error){
//         alert.error(error);
//         dispatch({type:"clearErrors"});
//       }
//     },[dispatch, alert, error])


//   return (
    
//     <div className='register'>
        
//         <form className="registerForm" onSubmit={registerHandler}>
//         <Typography variant="h3" style={{ padding: "2vmax" }}>
//           Social App
//         </Typography>

//         <Avatar src={avatar}
//         alt='user'
//         sx={{height:"10vmax", width:"10vmax"}}
//         />

// <input type="file" accept='image/*'onChange={handleImage}/>
// <input required className='registerInputs' type="text"   placeholder="Name"        value={name}
//           onChange={(e) => setName(e.target.value)}/>

//         <input
//         className='registerInputs'
//           type="email"
//           placeholder="Email"
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//         className='registerInputs'
//           type="password"
//           placeholder="Password"
//           required
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         {/* <Link to="/forgot/password">
//           <Typography>Forgot Password?</Typography>
//         </Link> */}


// <Link to="/">
//           <Typography>Already Signup ?   Login Now</Typography>
//         </Link>

//         <Button disabled={loading} type="submit">Signup</Button>

//         {/* <Link to="/register">
//           <Typography>New User?</Typography>
//         </Link> */}
//       </form>

//     </div>
//   )
// }

// export default Register



import { Avatar, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Register.css";
import { registerUser } from "../../Actions/User";
import { useAlert } from "react-alert";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAvatar(Reader.result);
      }
    };
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerUser(name, email, password, avatar));
  };

  useEffect(() => {
    if (error) {
       if(error !== 'Please login first'){
        alert.error(error);
       }
         
      
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, alert]);
  return (
    <div className="register">
      <form className="registerForm" onSubmit={submitHandler}>
        <Typography variant="h3" style={{ padding: "2vmax" }}>
          Social Aap
        </Typography>

        <Avatar
          src={avatar}
          alt="User"
          sx={{ height: "10vmax", width: "10vmax" }}
        />

        <input type="file" accept="image/*" onChange={handleImageChange} />

        <input
          type="text"
          value={name}
          placeholder="Name"
          className="registerInputs"
          required
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="registerInputs"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="registerInputs"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/">
          <Typography>Already Szigned Up? Login Now</Typography>
        </Link>

        <Button disabled={loading} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Register;