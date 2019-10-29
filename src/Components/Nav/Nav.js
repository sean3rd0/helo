import React from "react"
import {withRouter} from "react-router"
import {Link} from "react-router-dom"
// import {withRouter} from "react-router-dom"
import {connect} from "react-redux"

class Nav extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <div>
                    <img src={this.props.profile_pic} alt="profile picture"></img>
                    <h3>{this.props.username}</h3>
                </div>
                <div>
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
                </div>
                <div>
                    <Link to="/">
                        <button 
                            className="nav-logout-button"
                            >Logout</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {username, profile_pic} = state;
    
    return {
        username: username, 
        profile_pic: profile_pic
    }
}

export default connect(mapStateToProps)(Nav)