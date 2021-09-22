import React,{Component} from "react";
import PropTypes from 'prop-types';

class Search extends Component{
   
    state={
        text:''
    };
    

    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    static propTypes={
        searchUsers:PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired

    }

    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.text===''){
            this.props.setAlert('please enter something','light');
        }
        else{
            console.log(this.state.text)
            this.props.searchUsers(this.state.text)
            this.setState({text:''})
        }
        

    }
 
    render() {
        const {clearUsers,showClear}=this.props
      return(
      <div>
          <form onSubmit={this.onSubmit}
          className='form'>
              <input type='text' name='text'
               placeholder="search" value={this.state.text} onChange={this.onChange}/>
                
              <input type='submit' value='search' className='btn btn-dark btn-block'/>

          </form>
          {showClear && (<button className="btn btn-dark btn-block" 
          onClick={clearUsers}>Clear</button>)}
          {/* show the clear button only if user length > 0 */}
          
      </div> 
      
  
      )
      }
  }
  export default Search;
