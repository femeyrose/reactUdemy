

import React from "react";
import User from './User'
// import Spinner  from "./Spinner";
import ClipLoader from "react-spinners/ClipLoader";


const Userlist =({users,loading})=>{
//     state = {
//        users:[ {
        
//         id: '1',
//         login: 'mojombo',
//         avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
//         state_url: 'https://github.com/mojombo'
//     },
//     {
        
//         id: '2',
//         login: 'sam',
//         avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
//         state_url: 'https://github.com/defunkt'
//     },
//     {
        
//         id: '3',
//         login: 'kick',
//         avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
//         state_url: 'https://github.com/pjhyett'
//     },
// ]

// }
//  loading=true;
if(loading){
   return(<ClipLoader/>) 
}
else{
    return(
        <div style={userStyle}>
            {users.map(user=>(
              //   taken the data users from app.js as props
            <User key={user.id} user={user}></User>  ) )}
           
            
        </div> 
        
    
        )
        }
    }
  
     
  

  const userStyle={
      display:"grid",
      gridTemplateColumns:"repeat(3,1fr)",
      gridGap:'1rem',
  }
  export default Userlist;