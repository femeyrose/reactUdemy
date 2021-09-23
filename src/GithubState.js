import React,{useReducer} from 'react';
import axios from 'axios';
import GithubContext from './GithubContext';
import GithubReducer from  './GithubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT
} from './types'

const GithubState =props=>{
   const initialState ={
        users:[],
        user:{},
        repos:[],
        loading:false
    }

const [state,dispatch] =useReducer[GithubReducer,initialState]

// search users

  const searchUsers = async text => {
    console.log(text)
   setLoading();
//    calls setloading here, then its dispatches the type SET_LOADING

    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    // this.setState({ users: res.data.items, loading: false })
  dispatch({
      type:SEARCH_USERS,
      payload:res.data,
  })
// then it dispatches the type SEARCH_USERS with the data
// from here calls to githubreducer.js
 
  }

// get user

// get repos


// clear user


// set loading
const setLoading =()=>{
    dispatch({type:SET_LOADING})
}

return (<GithubContext.Provider 
    value={{
        users:state.users,
        user:state.user,
        repos:state.repos,
        loading:state.loading
    }}
    
    >
    {props.children}
    </GithubContext.Provider>)

}

export default GithubContext

// moving everything to here like searchusers, getusers etc

