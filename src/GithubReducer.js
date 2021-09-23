// import {
//     SEARCH_USERS,
//     GET_USER,
//     CLEAR_USERS,
//     GET_REPOS,
//     SET_LOADING,
//     SET_ALERT,
//     REMOVE_ALERT
// } from './types'

// export default (state,action)=>{
//     switch(action.type){
//         case SEARCH_USERS:
//             return{
//                 ...state,
//                 users:action.payload,
//                 loading:false
//             }
//     case SET_LOADING:
//         return{
//      ...state,
//     loading:true
//         }
//         default:
//             return state;
//     }
// }


// A reducer is a function that determines changes to an application’s state. It uses the action it receives to determine this change. 
// A reducer is a function that determines changes to an application’s state. It uses the action it receives to determine this change. We have tools, like Redux, that help manage an application’s state changes in a single store so that they behave consistently.
// Redux relies heavily on reducer functions that take the previous state and an action in order to execute the next state.