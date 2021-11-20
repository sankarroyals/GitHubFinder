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
import GithubState from './context/github/GithubState';

const App =() => {

  const [alert, setAlert] = useState(null)
  
  
  const showAlert = (msg, type) => {
    setAlert({ msg, type } );
    setTimeout(() => setAlert(  null ), 3000);

  }




  
    return (
      <GithubState>
         {/* // WE SHOULD REGISTER 'LINKS' EACH PAGE FOR FURTHER USE  IN ANY COMPONENT EX:'NAVBAR.JS' */}

        <Router>
          <div className="App">
            <Navbar title="Github Finder" icon="fab fa-github" />
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route exact path='/' render={props => (
                  <Fragment>
                    <Search showAlert={showAlert} />
                    <Users  />
                  </Fragment>
                )} />



                {/* ABOUT PAGE RENDERS AT PATH = '/about' WE CAN ABLE TO LINK IT IN ANY PAGE NOW LIKE VUE JS*/}

                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={ User }/>
              
              </Switch>
            </div>
          </div>

        </Router>
      </GithubState>
      
    )

  }



export default App;
