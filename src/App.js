import React, { Component, Fragment } from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';            //  FIRST INSTALL " npm i react-router-dom "
import axios from 'axios';                                            //  FIRST INSTALL " npm i axios "

class App extends Component {

  state = {
    users: [],
    user:{},
    loading: false,
    alert: null,
    repos:[]
  }


  // async componentDidMount() {
  //   this.setState({ loading: true });                                       // setState is used to update the state of the component
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);
  //   this.setState({ users: res.data, loading: false });                      // setState is used to update the state of the component
  // }


  searchUsers = async (text) => {                                                // SEARCHING GITHUB USERS WHICH IS TAKEN FROM THE SEARCH COMPONENT

    this.setState({ loading: true });                                            // setState is used to update the state of the component

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}
    &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&                      
     client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);                      //    here link is from see resct1.txt file for link to search all users
    this.setState({ users: res.data.items, loading: false });                   // res.data.items is neccasary because we are rendering searched ones


  }


  //GET A SINGLE USER
  getUser = async (username) => {

    this.setState({ loading: true });                                            // setState is used to update the state of the component

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&                      
     client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);                      //   here link is from see resct1.txt file for link to search all users
    this.setState({ user: res.data, loading: false });                   


  }

  ///Get users repos

  getUserRepos = async (username) => {

    this.setState({ loading: true });                                            // setState is used to update the state of the component

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&                      
     client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);                      //   here link is from see resct1.txt file for link to search all users
    this.setState({ repos: res.data, loading: false });


  }
  


  clearUsers = () => {
    this.setState({ users: [] });
    


  }

  showAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 3000);

  }




  render() {
    return (


      // WE SHOULD REGISTER 'LINKS' EACH PAGE FOR FURTHER USE  IN ANY COMPONENT EX:'NAVBAR.JS'

      <Router>
        <div className="App">
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}             // FOR SHOWING THE CLEAR BUTTON SEE THE 'SEARCH.JS'
                    setAlert={this.showAlert}
                  />
                  <Users loading={this.state.loading} users={this.state.users} />
                </Fragment>
              )} />


              
              {/* ABOUT PAGE RENDERS AT PATH = '/about' WE CAN ABLE TO LINK IT IN ANY PAGE NOW LIKE VUE JS*/}

              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={props => (
               
                <User
                  {...props}
                  getUser={this.getUser}
                  user={this.state.user} loading={this.state.loading}
                  getUserRepos={this.getUserRepos}
                  repos={this.state.repos}
                  />    //  HERE WE ARE PASSING THE PROPS TO THE USER COMPONENT
               
              )} />
            </Switch>
          </div>
        </div>

      </Router>
      
    )

  }

}

export default App;
