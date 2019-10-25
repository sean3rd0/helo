import React from "react"
import axios from "axios"
import {Redirect} from "react-router"

export default class Auth extends React.Component{
    constructor(){
        super()
        this.state = {
            username: "", 
            password: ""
        }

        this.login = this.login.bind(this)
    }


    handleStateChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    login(){
        axios.post('/api/auth/login', {username: this.state.username, password: this.state.password})
        .then(response => {
            return <Redirect to='/dashboard' />
        })
        .catch(err => {
            console.log(err)
        })
    }


    register = () => {
        axios.post('/api/auth/register', {username: this.state.username, password: this.state.password})
        .then(response => {
            return <Redirect to='/dashboard' />
        })
        .catch(err => {
            console.log(err)
        })
    }





    render(){
        return(
            <div>
                <div>Auth</div>
                <input 
                    placeholder="Username"
                    onChange={e => this.handleStateChange(e)}
                    name="username"
                />
                <input 
                    placeholder="Password"
                    onChange={e => this.handleStateChange(e)}
                    name="password"
                />
                <nav>
                    <button 
                        onClick={this.login}
                    >Login</button>
                    <button 
                        onClick={this.register}
                    >Register</button>
                </nav>
            </div>
        )
    }
}