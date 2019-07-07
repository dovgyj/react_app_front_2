import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Redirect} from "react-router-dom";

import About from "./pages/about/About";
import Register from "./pages/register/Register";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/about" component={About}/>
                <Route exact path="/auth" component={Register}/>
                <Redirect from="/" to="/about"/>
            </BrowserRouter>
        );
    }

}

export default App;