import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

// export class UserItem extends Component {


const UserItem = (props) => {
 
    
    // render() {                                                                    // render() used when we use "class" 
        
        // const { id, login, avtar_url, html_url } = this.props.user               // this line used when we use "class"
       
        const { login, avatar_url, html_url } = props.user                      // this line used when we use "function"
        return (
                
                <div className="card text-center">
                    <img src={avatar_url} alt="user" className="round-img hov" style=
                    {{ width: '60px' }} />
                    
                    <h3>{login}</h3>
                   <div>
                    

                    {/* Login is the params here  */}
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">         
                        More</Link>
                    </div>
               </div>
                
                
         
        )
}
    
UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
// }

export default UserItem
