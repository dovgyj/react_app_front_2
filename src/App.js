import React, {Component} from 'react';

import Register from './components/register/Register'
import Login from './components/login/Login';
import Post from './components/post/Post';
import Footer from './components/footer/Footer';

class App extends Component {

    render() {
        return (
            <div className='public-layout'>
                <div className='container'>
                    <div className='landing'>
                        <div className='landing__brand'>
                            <a className="brand" href="https://fosstodon.org/">
                                <img src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png" style={{width:"210px",heigth:"50px"}} alt=""/>
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
                                                Discover users
                                                <small>Browse a profile directory and filter by interests</small>
                                            </h4>
                                            <div className='avatar-stack'>
                                                <img width="48" height="48" alt="" className="account__avatar"
                                                     src="https://cf.mastohost.com/v1/AUTH_91eb37814936490c95da7b85993cc2ff/fosstodon/accounts/avatars/000/000/001/original/60f17ae002bb0b35.png"/>
                                                <img width="48" height="48" alt="" className="account__avatar"
                                                     src="https://cf.mastohost.com/v1/AUTH_91eb37814936490c95da7b85993cc2ff/fosstodon/accounts/avatars/000/000/032/original/809bfebf9854e133.png"/>
                                                <img width="48" height="48" alt="" className="account__avatar"
                                                     src="https://cf.mastohost.com/v1/AUTH_91eb37814936490c95da7b85993cc2ff/fosstodon/accounts/avatars/000/110/553/original/e9da2214352e3029.jpg"/>
                                            </div>
                                        </a></div>
                                    <div className='directory__tag'>
                                        <a href="/public">
                                            <h4>
                                                <i className="fa fa-globe fa-fw"></i>
                                                See what&#39;s happening
                                                <small>Browse a live stream of public posts on Mastodon</small>
                                            </h4>
                                        </a></div>
                                    <div className='directory__tag'>
                                        <a target="_blank" rel="noopener" href="https://joinmastodon.org/apps">
                                            <h4>
                                                <i className="fa fa-tablet fa-fw"></i>
                                                Try a mobile app
                                                <small>Use Mastodon from iOS, Android and other platforms</small>
                                            </h4>
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
        );
    }

}

export default App;
///app/styles//mastodon