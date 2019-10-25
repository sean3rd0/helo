import React from "react"
import {Switch, Route} from "react-router-dom"
import Auth from "./Components/Auth/Auth"
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form"
import Post from "./Components/Post/Post"

export default (
    <Switch>
        <Route exact path="/" component={Auth}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/post/:postid" component={Post}></Route>
        <Route path="/new" component={Form}></Route>
    </Switch>
)