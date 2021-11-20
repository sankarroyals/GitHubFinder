import React, { useContext}from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = (props) => {
    const githubContext = useContext(GithubContext);                 // INITIALIZING THE CONTEXT
    const {loading, users} = githubContext;               // GETTING DATA FROM GIthubContext

    //  THIS IS DONE BEFORE FETCHING DATA FROM APP.JS 

    // state = {
    //     users: [
    //       {     id: '1',
    //             avtar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    //             login: 'mojombo',
    //             html_url: "https://github.com/mojombo"
    //         },
    //         {
    //             id: '2',
    //             avtar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
    //             login: 'sankar',
    //             html_url: "https://github.com/mojombo"
    //         },
    //         {
    //             id: '3',
    //             avtar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    //             login: 'mukesh',
    //             html_url: "https://github.com/mojombo"
    //         }
    //     ]
    // }



    // THIS IS DONE AFTER FETCHING DATA FROM APP.JS   IT SENDS DATA AS PROPS SEE THE APP.JS FOR CLARIFICATION INSTEAD OF USING "this.state.user" we use "this.props.user"

        
    
        if (loading) {                                             // LOADING AND USERS GET FROM APP.JS
        return <Spinner />                      // IF LOADING IS TRUE THEN SHOW SPINNER WHICH IS IN APP.JS
        }
        else {
         return (
            <div style={userStyle}>
                {
                    users.map(user => (
                        <UserItem key={user.id} user={user} />
                    ))
                }
            </div>
        )
    }
      
    
}



const userStyle = {               
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}



export default Users
