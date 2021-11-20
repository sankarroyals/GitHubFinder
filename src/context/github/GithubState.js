import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer"
import {
    SEARCH_USER,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT
} from '../types'

// PUT ALL VARIABLES HERE AND ACCESS ANYWHERE IN THE APP STEP 1
const GithubState = props => {
    const intialState = {
        users: [],
        user: {},
        repos: [],
        loading:false
    }

    const [state, dispatch] = useReducer(githubReducer, intialState)            // STEP 2
    
    // Search Users

    const searchUsers = async (text) => {                                                // SEARCHING GITHUB USERS WHICH IS TAKEN FROM THE SEARCH COMPONENT

        setLoading();                                            // setState is used to update the state of the component

        const res = await axios.get(
            `https://api.github.com/search/users?q=${text}
            &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&                      
            client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);                      //    here link is from see resct1.txt file for link to search all users
        
        dispatch({
            type: SEARCH_USER,
            payload: res.data.items 
        
        })

    }

    //Get User
    const getUser = async (username) => {

        setLoading();                                            // setState is used to update the state of the component
        // setState is used to update the state of the component

        const res = await axios.get(
            `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&                      
             client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);                      //   here link is from see resct1.txt file for link to search all users
        dispatch({
            type: GET_USER,
            payload: res.data
        })


    }


    // GET USERS REPO

    const getUserRepos = async (username) => {

        setLoading();                                           // setState is used to update the state of the component

        const res = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&                      
            client_secret=${process.env.REACT_APP_GITHUB_SECRET}`);                      //   here link is from see resct1.txt file for link to search all users
        dispatch({
            type: GET_REPOS,
            payload:res.data
       })


    }



    //Clear Users

    const clearUsers = () => {
        dispatch({
            type: CLEAR_USERS,
        })
    }

    //Set Loading
    const setLoading = () => dispatch({type:SET_LOADING})    // IT GOES TO GITHUBREDUCER.JS FILE







    // STEP 3
    
    return <GithubContext.Provider                       // THIS LINE IS FOR PROVIDING THE CONTEXT TO THE APP AND WEE CAN USE IT IN ANY COMPONENT
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            alert: state.alert,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
          
        }}
    
    >
        {props.children}
    </GithubContext.Provider>

    
}
export default GithubState;
