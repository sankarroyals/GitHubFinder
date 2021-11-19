import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="card text-center">
                    <img src="https://avatars.githubusercontent.com/u/47314238?v=4" alt="profile" className="round-img" style={{ width: '150px' }}/>
                    <div>
                        <h1>😎This is Sankar😎</h1>
                        <h3>Hey welcome to my first React.js project that is GitHub Finder </h3>
                        <p>You can search your profile and see your github followers and repos from here</p>
                    </div>
                    <Link to="/" className="btn btn-dark btn-sm my-1">Back to Home</Link>
                </div>
           
           </div>
        </Fragment>
    )
}
export default About
