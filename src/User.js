// https://api.github.com/users
// for users

import React from "react";
import {Link} from 'react-router-dom';



// const User=props=> {
const User    =({user: { login, avatar_url, html_url }})=>{

        // state = {
        //     id: 'id',
        //     login: 'mojombo',
        //     avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        //     state_url: 'https://github.com/mojombo'
        // }
    
   
        // const { login, avatar_url, state_url } = props.user
        return (
            <div className="card text-center  center wid">
                <img src={avatar_url} alt="" style={{width:'60px'}} />
                <h3>{login}</h3>
                <Link to={`/user/${login}`} className="btn btn-secondary">More</Link>
            </div>


        )
    }

export default User;

// removed render(),state,component when change class into arrow fn