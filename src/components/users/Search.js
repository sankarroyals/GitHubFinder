import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {

    state= {
        text: '',
      
    }
    static propTypes = {
        clearUsers: PropTypes.func.isRequired,
        searchUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        showAlert: PropTypes.func.isRequired
        
    }
    onChange = (e) => {                                                    // LIKE " V-MODEL BINDING IN VUE.JS"
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) =>  {
        e.preventDefault()
        if (this.state.text === '') {                                      // IF USER DOES NOT ENTER ANYTHING
            this.props.showAlert('Please enter something','light')                // SET ALERT function see in App.js
        }
        else {


            this.props.searchUsers(this.state.text)                       // TAKING TEXT AS PARAMETER TO SEARCH USERS  see in APP.JS  (searchUsers)  
            this.setState({ text: '' })                                   // CLEARING THE INPUT FIELD
       
        }
    }
    
    render() {
        return (
            <div>
                
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange}/>
                    
                    {/* LIKE V-MODEL BINDING */}
                    {/* <h2>{ this.state.text}</h2>*/}

                  


                    
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>

                {/* CLEAR BUTTON */}

                {this.props.showClear ? <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button> : null}                                                     
                
               
            </div>
        )
    }
}

export default Search
