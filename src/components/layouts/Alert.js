import React,{useContext} from 'react'
import GithubContext from '../../context/github/githubContext';

const Alert = (props) => {
    const githubcontext = useContext(GithubContext)
    const { alert } = githubcontext
     return (
         alert != null && (<div className={`alert alert-${alert.type}`}>
             <i className="fas fa-info-circle"></i> {alert}
         </div>
            

         ))
}
export default Alert