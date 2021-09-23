import logo from './logo.svg';
import './App.css';
import { Fragment,useState,Component } from 'react';
import Navbar from './Navbar'
import Userlist from './Userlist'
import axios from 'axios';
import Search from './Search';
import Alert from './Alert';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './About';
import Usr from './Usr';
import SearchUsestate from './SearchUsestate';
import UsrUseEffect from './UsrUseEffect'
// import GithubState from './GithubState';



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App =()=> {

  const [users,setUsers]=useState([])
  const [loading,setLoading]=useState(false)
  const [alert,setAlert]=useState(null)
  const [user,setUser]=useState({})
  const [repos,setRepos]=useState([])

  // state = {
  //   users: [],
  //   loading: false,
  //   alert: null,
  //   user:{},
  //   repos:[]
  // }

   const componentDidMount=() =>{
    // calls when the component loaded
    // this.setState({ loading: true });
   setLoading(true)
    const res =  axios.get('https://api.github.com/users')
    // this.setState({ users: res.data, loading: false })
    setUsers(res.data)
    setLoading(false)
  }
  // search users
  const searchUsers = async text => {
    console.log(text)
   setLoading( true );
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    // this.setState({ users: res.data.items, loading: false })
   setUsers(res.data.items)
   setLoading(false)
  }

  // get single github user
  const getUser=async (username)=>{
  
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}`);
    // this.setState({ user: res.data, loading: false })
    setUser(res.data)
    setLoading(false)
  }

  // get user repo
  const getUserRepos=async (username)=>{
  
    setLoading(true);
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
    // this.setState({ repos: res.data, loading: false })
    setRepos(res.data)
    setLoading(false)
  }



  // clear users
 const  clearUsers = () => {
    // this.setState({ users: [], loading: false })
    setLoading(false)
    setUsers([])
  }

  // set alert
 const showAlert = (msg, type) => {
    // this.setState({ alert: { msg, type } })
    setAlert( { msg, type })
    setTimeout(() =>  setAlert(null), 5000);
    // this.setState({ alert: null })
   

  }

  // render() {
    return (
      
      <Router>
        {/* <div> */}
          <Navbar title="React Github" />
          <div className="container">
            <Switch>
            <Route  path='/us' component={SearchUsestate} />
            {/* for use state example */}

              <Route exact path='/' render={props => (
                <Fragment>
                  <Alert alert={alert} />
                  <Search searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert} />

                  {/* using props up the level for taking the data entered */}
                  <Userlist loading={loading} users={users} />
                  {/* state passing as props */}
                </Fragment>
               )}
               /> 
         
              <Route  path='/about' component={About} />
             
              <Route exact path='/user/:login' 
              render={props=> (
              <Usr {...props} getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={loading}/>
              // passing the data to the user component
              )}
              />
           </Switch>
         
          </div>

        {/* </div> */}
      </Router>
    
    )
  // }
}
export default App;


// please refer github finder for full trainer code (especially context part)

// production/deploy
// npm i -g netlify-cli
// create netlify.toml
// type command--netlify init
// authenticate in netlify
// npm run build
// npm install netlify-cli -g
// netlify deploy
