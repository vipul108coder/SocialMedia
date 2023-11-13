import React, { useEffect, useState } from 'react'
import "./Account.css"
import { useDispatch, useSelector } from 'react-redux';
import { deleteMyProfile, getMyPosts, logoutUser } from '../../Actions/User';
import Loader from '../Loader/Loader';
import { Avatar, Button, Dialog, Typography } from '@mui/material';
import Post from '../Post/Post';
import { Link } from 'react-router-dom';
import {useAlert} from "react-alert"
import User from '../User/User';

const Account = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const {user, loading:userLoading} = useSelector((state)=>state.user);

    const{loading, error, posts} = useSelector((state)=>state.myPosts);

    const{error:likeError, message} = useSelector((state)=>state.like);


    
  const logoutHandler = ()=>{
 dispatch(logoutUser());
alert.success("Logged out successfully");
  } 




  const deleteProfileHandler = ()=>{
     dispatch(deleteMyProfile());
  }




    useEffect(()=>{
        dispatch(getMyPosts());
    },[dispatch])






const[followersToggle, setFollowersToggle] = useState(false);
const[followeingToggle, setFollowingToggle] = useState(false);

    useEffect(()=>{
     
      if(error){
          alert.error(error);
          dispatch({type:"clearErrors"});   
      }

      if(likeError){
         alert.error(likeError);
         dispatch({type:"clearErrors"});   
     }

      if(message){
          alert.success(message);
          dispatch({type:"clearMessage"});
      }

  },[alert, error, message, likeError, dispatch])






  return (
    
    loading===true || userLoading===true?<Loader/>:(
    <div className='account'>
        
     <div className='accountleft'>

{
   posts &&  posts.length > 0 ? posts.map((post)=>( 
    <Post
    key={post._id}
 postImage={post.image.url}
 postId={post._id}
 caption={post.caption}
 
likes={post.likes}
  comments={post.comments}
 ownerImage={post.owner.avatar.url}
 ownerName={post.owner.name}
 ownerId={post.owner._id}
 isDelete={true}
 isAccount = {true}


/>)):<Typography variant='h6'>No posts yet</Typography>
 
}

     </div>
     
    <div className='accountright'>
      <Avatar src={user.avatar.url} sx={{height:"8vmax", width:"8vmax"}}/>
      <Typography variant='h5'>{user.name}</Typography>


    <div>
<button onClick={()=>setFollowersToggle(!followersToggle)}>
  <Typography>Followers</Typography>
</button>

<Typography>{user.followers.length}</Typography>

    </div>



    <div>
<button onClick ={()=>setFollowingToggle(!followeingToggle)}>
  <Typography>Following</Typography>
</button>

<Typography>{user.following.length}</Typography>

    </div>





    <div>
 
  <Typography>Post</Typography>
 

<Typography>{user.posts.length}</Typography>

    </div>



    <Button variant='contained' onClick={logoutHandler}>Logout</Button>
<Link to="/update/profile">Edit Profile</Link>
<Link to="/update/password">Change Password</Link>
<Button variant='text' style={{color:"red", margin:"2vmax"}} onClick={deleteProfileHandler}>Delete My Profile</Button>



 

 {/* //followers dialog */}
<Dialog open={followersToggle} onClose={()=>setFollowersToggle(!followersToggle)}>


<div className='DialogBox'>
<Typography variant='h4'>Followers

</Typography>
{
 user && user.followers.length > 0 ?user.followers.map((follower)=>(
  
    <User
    key={follower._id}
    userId = {follower._id}
    name={follower.name}
    avatar={follower.avatar.url}
    />
  )
 )  :  <Typography style={{margin:"2vmax"}}>You have no followers</Typography>

    
}



</div>

</Dialog>

 


{/* //following dialogg */}
<Dialog open={followeingToggle} onClose={()=>setFollowingToggle(!followeingToggle)}>


<div className='DialogBox'>
<Typography variant='h4'>Follwing

</Typography>
{
 user && user.following.length > 0 ?user.following.map((follow)=>(
  
    <User
    key={follow._id}
    userId = {follow._id}
    name={follow.name}
    avatar={follow.avatar.url}
    />
  )
 )  :  <Typography style={{margin:"2vmax"}}>You're not following anyone </Typography>

    
}



</div>

</Dialog>

    </div>
    </div>
  ))
}

export default Account