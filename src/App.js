import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Redirect} from "react-router-dom";

import About from "./pages/about/About";
import Register from "./pages/register/Register";

import {Provider} from "react-redux";
import store from "./store";

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/auth" component={Register}/>
                    <Redirect from="/" to="/about"/>
                </BrowserRouter>
            </Provider>
        );
    }

}

export default App;