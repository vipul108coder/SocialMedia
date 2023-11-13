import React, { useEffect } from 'react'
import "./Home.css"
import User from '../User/User'
import Post from '../Post/Post'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getFollowingPosts } from '../../Actions/User';
import Loader from "../Loader/Loader"
import { Typography } from '@mui/material';
import {useAlert} from "react-alert"


const Home = () => {


const dispatch = useDispatch();


const {loading,posts, error} = useSelector(
   (state) =>state.postOfFollowing
)




const {user, loading:usersLoading} = useSelector((state)=>state.allUsers)

   useEffect(()=>{
    
      dispatch(getFollowingPosts());
       dispatch(getAllUsers());
   },[dispatch])

//like 

const alert = useAlert();

const{error:likeError, message} = useSelector((state)=>state.like);


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
   loading === true || usersLoading===true?<Loader/>:(
    <div className='home'>
       
     <div className='homeleft'>

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
   //  isDelete=false,
   //  isAccount = {true}


 />)):<Typography variant='h6'>No posts yet</Typography>

}



     </div>





     <div className='homeright'>

 {
   user && user.length > 0 ?(

      user.map((item)=>(
         <User
         key={item._id}
         userId = {item._id}
         name={item.name}
         avatar={item.avatar.url}
         />
         
      ))
     

   ):<Typography>No Users Yet</Typography>
 }
     </div>



    </div>)
  )
}

export default Home