import React,{Component,useState} from "react";
import PropTypes from 'prop-types';

const SearchUsestate =({searchUsers,showClear,clearUsers,setAlert})=>{
 const [text,setText]=useState('')
    

   const onChange=(e)=>{
      setText(e.target.value)
    }

   

   const onSubmit=(e)=>{
        e.preventDefault();
        if(text===''){
            setAlert('please enter something','light');
        }
        else{
            console.log(text)
            searchUsers(text)
            setText('')
        }
        

    }
 
  
      return(
      <div>
          <form onSubmit={onSubmit}
          className='form'>
              <input type='text' name='text'
               placeholder="search" value={text} onChange={onChange}/>
                
              <input type='submit' value='search' className='btn btn-dark btn-block'/>

          </form>
          {showClear && (<button className="btn btn-dark btn-block" 
          onClick={clearUsers}>Clear</button>)}
          {/* show the clear button only if user length > 0 */}
          
      </div> 
      
  
      )
      
  }

  SearchUsestate.propTypes={
    searchUsers:PropTypes.func.isRequired,
    clearUsers:PropTypes.func.isRequired,
    showClear:PropTypes.bool.isRequired

}
  export default SearchUsestate;
