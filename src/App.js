import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';
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

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user:{},
    repos:[]
  }
  async componentDidMount() {
    // calls when the component loaded
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users')
    this.setState({ users: res.data, loading: false })

  }
  // search users
  searchUsers = async text => {
    console.log(text)
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({ users: res.data.items, loading: false })
  }

  // get single github user
  getUser=async (username)=>{
  
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({ user: res.data, loading: false })
  }

  // get user repo
  getUserRepos=async (username)=>{
  
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
    this.setState({ repos: res.data, loading: false })
  }



  // clear users
  clearUsers = () => {
    this.setState({ users: [], loading: false })
  }

  // set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => this.setState({ alert: null }), 5000)

  }

  render() {
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
                  <Alert alert={this.state.alert} />
                  <Search searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                    setAlert={this.setAlert} />

                  {/* using props up the level for taking the data entered */}
                  <Userlist loading={this.state.loading} users={this.state.users} />
                  {/* state passing as props */}
                </Fragment>
               )}
               /> 
         
              <Route  path='/about' component={About} />
             
              <Route exact path='/user/:login' 
              render={props=> (
              <Usr {...props} getUser={this.getUser} getUserRepos={this.getUserRepos} repos={this.state.repos} user={this.state.user} loading={this.state.loading}/>
              // passing the data to the user component
              )}
              />
           </Switch>
         
          </div>

        {/* </div> */}
      </Router>

    )
  }
}
export default App;
