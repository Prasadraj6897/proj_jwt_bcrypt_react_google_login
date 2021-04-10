import React from "react";
import Message from "./Message"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar/Navbar"
import Auth from "./Auth/Auth";
const UserRouter = () =>{
    return(
        <React.Fragment>
            
            <Router>
                <div className="container">
                    <Navbar />
                </div>
                <Switch>
                        <Route exact path = "/"  component = {Message} />
                        <Route exact path = "/auth"  component = {Auth} />
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default UserRouter;