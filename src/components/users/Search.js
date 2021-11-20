import React, { useContext } from 'react'
import { useState } from 'react'
import GithubContext from '../../context/github/githubContext'


const Search = (props) => {
    
    const githubcontext = useContext(GithubContext)
    
    const [text, setText] = useState('')              // "text" IS THE NAME AND WE CAN MANUPLATE IT USING "setText"



    const onChange = (e) => {                                                    // LIKE " V-MODEL BINDING IN VUE.JS"
        setText(e.target.value)
    }
    const onSubmit = (e) =>  {
        e.preventDefault()
        if (text === '') {                                      // IF USER DOES NOT ENTER ANYTHING
           githubcontext.showAlert('Please enter something','light')                // SET ALERT function see in App.js
        }
        else {


           githubcontext.searchUsers(text)                       // TAKING TEXT AS PARAMETER TO SEARCH USERS  see in APP.JS  (searchUsers)  
            setText('')                                   // CLEARING THE INPUT FIELD
       
        }
    }
    
    
        return (
            <div>
                
                <form className="form" onSubmit={onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}/>
                    
                    {/* LIKE V-MODEL BINDING */}
                    {/* <h2>{ setText}</h2>*/}

                  


                    
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>

                {/* CLEAR BUTTON */}

                {githubcontext.users.length>0 ? <button className="btn btn-light btn-block" onClick={githubcontext.clearUsers}>Clear</button> : null}                                                     
                
               
            </div>
        )
    }

export default Search
