import React, {Component} from 'react';

import Register from './components/register/Register'
import Login from './components/login/Login';
import Post from './components/post/Post';
import Footer from './components/footer/Footer';

class App extends Component {

    render() {
        return (
            <div className="stars"> 
                <div className="twinkling">
            <div className='public-layout'>
                <div className='container'>
                    <div className='landing'>
                        <div className='landing__brand'>
                            <a className="brand" href="https://sonet.org/">
                                <img src="" style={{width:"350px",heigth:"50px"}} alt=""/>
                            </a></div>
                        <div className='landing__grid'>
                            <div className='landing__grid__column landing__grid__column-registration'>
                                <div className='box-widget'>
                                    <Register/>
                                </div>
                                <div className='directory'>
                                    <div className='directory__tag'>
                                        <a href="/explore">
                                            <h4>
                                                <i className="fa fa-address-book fa-fw"></i>
                                                Galaxy chat
                                                <small>Try intergalactic chat :) </small>
                                            </h4>
                                            <div className='avatar-stack'>
                                                <img width="48" height="48" alt="" className="account__avatar"
                                                     src=""/>
                                                <img width="48" height="48" alt="" className="account__avatar"
                                                     src=""/>
                                                <img width="48" height="48" alt="" className="account__avatar"
                                                     src=""/>
                                                <img width="48" height="48" alt="" className="account__avatar"
                                                     src=""/>
                                            </div>
                                        </a></div>
                                </div>
                            </div>
                            <div className='landing__grid__column landing__grid__column-login'>
                                <div className='box-widget'>
                                    <Login/>
                                </div>
                                <Post/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <Footer/>
                </div>
            </div>
            </div>
            </div>
        );
    }

}

export default App;
///app/styles//mastodon