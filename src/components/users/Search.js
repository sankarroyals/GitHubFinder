import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'


const Search= (props)=>{

//    state= {                                                            // BEFORE USING USESTATE
//         text: '',
      
//     }
    
    
    
           const [text,setText] = useState('')              // "text" IS THE NAME AND WE CAN MANUPLATE IT USING "setText"


                
            //     static propTypes = {
            //     clearUsers: PropTypes.func.isRequired,
            //     searchUsers: PropTypes.func.isRequired,
            //     showClear: PropTypes.bool.isRequired,
            //     showAlert: PropTypes.func.isRequired

            // }




    const onChange = (e) => {                                                    // LIKE " V-MODEL BINDING IN VUE.JS"
        setText(e.target.value)
    }
    const onSubmit = (e) =>  {
        e.preventDefault()
        if (text === '') {                                      // IF USER DOES NOT ENTER ANYTHING
            props.showAlert('Please enter something','light')                // SET ALERT function see in App.js
        }
        else {


            props.searchUsers(text)                       // TAKING TEXT AS PARAMETER TO SEARCH USERS  see in APP.JS  (searchUsers)  
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

                {props.showClear ? <button className="btn btn-light btn-block" onClick={props.clearUsers}>Clear</button> : null}                                                     
                
               
            </div>
        )
    }

Search.prototype = {

    
    clearUsers: PropTypes.func.isRequired,
    searchUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired

}


export default Search
