import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import  Login  from '../src/components/Login/Login';
import Home from "./components/Home/Home"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './Actions/User';
import Account from './components/Account/Account';
import NewPost from './components/NewPost/NewPost';
import Register from './components/Register/Register';
import UpdateProfile from './UpdateProfile/UpdateProfile';
import UpdatePassword from './components/ChangeMyPassword/UpdatePassword';
function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
dispatch(loadUser());
  }, [dispatch])


 


  const {isAuthenticated} = useSelector(state => state.user);
  return (
    <Router>
      { isAuthenticated && <Header/> }
      
      
      
      <Routes>
        
        <Route path="/" element={ isAuthenticated ?<Home/> :<Login />} />
   
      <Route path="/account" element={ isAuthenticated ?<Account/> :<Login />} />
     

        <Route path="/newpost" element={ isAuthenticated ?<NewPost/> :<Login />} />
       

          <Route path="/register" element={ isAuthenticated ?<Account/> :<Register />} />

        <Route path="/update/profile" element={ isAuthenticated ?<UpdateProfile/> :<Login />} />

        <Route path="/update/password" element={ isAuthenticated ?<UpdatePassword/> :<Login />} /> 

</Routes>

    </Router>
  );
}

export default App;
