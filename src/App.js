import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';            //  FIRST INSTALL " npm i react-router-dom "
import axios from 'axios';                                            //  FIRST INSTALL " npm i axios "

const App =() => {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)
  const [repos, setRepos] = useState([])

  // state = {
  //   users: [],          
  //   user:{},
  //   loading: false,
  //   alert: null,
  //   repos:[]
  // }


  // async componentDidMount() {
  //   this.setState({ loading: true });                                       // setState is used to update the state of the component
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
  //   this.setState({ users: res.data, loading: false });                      // setState is used to update the state of the component
  // }


  const searchUsers = async (text) => {                                                // SEARCHING GITHUB USERS WHICH IS TAKEN FROM THE SEARCH COMPONENT

    setLoading( true );                                            // setState is used to update the state of the component

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}
    &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&                      
     client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);                      //    here link is from see resct1.txt file for link to search all users
    setUsers( res.data.items );                   // res.data.items is neccasary because we are rendering searched ones
    setLoading(false)

  }


  //GET A SINGLE USER
   const getUser = async (username) => {

     setLoading(true);                                            // setState is used to update the state of the component
                                           // setState is used to update the state of the component

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&                      
     client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);                      //   here link is from see resct1.txt file for link to search all users
     setUser(res.data);                   // res.data.items is neccasary because we are rendering searched ones
     setLoading(false)


  }

  ///Get users repos

  const getUserRepos = async (username) => {

    setLoading(true);                                           // setState is used to update the state of the component

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&                      
     client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);                      //   here link is from see resct1.txt file for link to search all users
    setRepos(res.data);                   // res.data.items is neccasary because we are rendering searched ones
    setLoading(false)


  }
  


  const clearUsers = () => {
    setUsers([]);
    


  }

  const showAlert = (msg, type) => {
    setAlert({ msg, type } );
    setTimeout(() => setAlert(  null ), 3000);

  }




  
    return (


      // WE SHOULD REGISTER 'LINKS' EACH PAGE FOR FURTHER USE  IN ANY COMPONENT EX:'NAVBAR.JS'

      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}             // FOR SHOWING THE CLEAR BUTTON SEE THE 'SEARCH.JS'
                    showAlert={showAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              )} />


              
              {/* ABOUT PAGE RENDERS AT PATH = '/about' WE CAN ABLE TO LINK IT IN ANY PAGE NOW LIKE VUE JS*/}

              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
               
                <User
                  {...props}
                  getUser={getUser}
                  user={user} loading={loading}
                  getUserRepos={getUserRepos}
                  repos={repos}
                  />    //  HERE WE ARE PASSING THE PROPS TO THE USER COMPONENT
               
              )} />
            </Switch>
          </div>
        </div>

      </Router>
      
    )

  }



export default App;
