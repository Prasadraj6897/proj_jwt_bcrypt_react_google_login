import React from "react";
import Message from "./Message"
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from "./Navbar/Navbar"
import Auth from "./Auth/Auth";
import PostDetails from './PostDetails/PostDetails'

const UserRouter = () =>{
    const user = JSON.parse(localStorage.getItem('profile'));
    return(
        <React.Fragment>
            
            <Router>
                <div className="container">
                    <Navbar />
                </div>
                <Switch>
                        <Route exact path = "/"  component = {() => <Redirect to="/posts" />} />
                        <Route path="/posts" exact component={Message} />
                        <Route path="/posts/search" exact component={Message} />
                        <Route path="/posts/:id" exact component={PostDetails} />
                        <Route exact path = "/auth"  component ={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default UserRouter;