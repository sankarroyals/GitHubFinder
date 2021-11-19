import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';                   // TO LINK TO ANOTHER PAGE


// export class Navbar extends Component {     // using class

    // static defaultProps = {
    // title: 'Github Finder',
    // icon: 'fab fa-github'
    // }
    // static propTypes = {
    // title: PropTypes.string.isRequired,
    // icon: PropTypes.string.isRequired
    //   }






const Navbar = (props) => {
   

        const { title, icon } = props;
    
        return (
            <nav className="navbar bg-primary">
                
                <h1>
                    <i className={icon} /> {title}
                    
                </h1>
                <ul>
                     <li>
                        <Link to="/">Home</Link>
                    </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                </ul>

                
                
            </nav>
        )
    
}

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}


export default Navbar
