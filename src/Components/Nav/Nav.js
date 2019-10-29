import React from "react"
import {withRouter} from "react-router"
import {Link} from "react-router-dom"
// import {withRouter} from "react-router-dom"
import {connect} from "react-redux"

class Nav extends React.Component{
    render(){
        return(
            <div>
                <div>Nav</div>
                <Link to="/dashboard">
                    <button 
                        className="nav-home-button"
                    >Home</button>
                </Link>
                <Link to="/new">
                    <button 
                        className="nav-new-post-button"
                    >New Post</button>
                </Link>
                <Link to="/">
                    <button 
                        className="nav-logout-button"
                    >Logout</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps()

export default Nav