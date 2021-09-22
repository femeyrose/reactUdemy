import react,{Component} from "react";
import Proptypes from 'prop-types';
import {Link} from 'react-router-dom';


class Navbar extends Component{
    static defaultProps={
        name:"Finder"
    }
    // static proptypes={
    //     name:Proptypes.string.isRequired
    // }
    // we get a warning message if we enter value other than string

    render() {
      return(
        <div>
      <nav className="navbar navbar-expand-lg navbar-light bg">
      <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <i className="fa fa-github-square"></i>&nbsp;{this.props.title} {this.props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    </div>
   
   <ul className="list">
     <li className="li">
       <Link to="/">Home</Link>
     </li>
     <li className="li">
     <Link to="/about">About</Link> 
     </li>
   </ul>
    </nav>
      </div>
      
  
      )
      }
  }
  export default Navbar;