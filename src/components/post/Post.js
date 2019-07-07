import React, {Component} from "react";

class Post extends Component {
    render() {
        return (
            <div className='hero-widget'>
                <div className='hero-widget__img'>
                    <img alt="Fosstodon"
                         src="https://cf.mastohost.com/v1/AUTH_91eb37814936490c95da7b85993cc2ff/fosstodon/site_uploads/files/000/000/002/original/Fosstodon-Thumbnail-122x630.png"/>
                </div>
                <div className='hero-widget__text'>
                    <p>
                        Fosstodon is a Mastodon instance that is open to anyone who is interested in
                        technology; particularly free & open source software.
                        <a href="/about/more">Learn more
                            <i className="fa fa-angle-double-right"></i>
                        </a></p>
                </div>
                <div className='hero-widget__footer'>
                    <div className='hero-widget__footer__column'>
                        <h4>Administered by:</h4>
                        <div className="account">
                            <div className="account__wrapper"><a className="account__display-name"
                                                                 href="https://fosstodon.org/@fosstodon">
                                <div className="account__avatar-wrapper">
                                </div>
                                <span className="display-name"><bdi><strong
                                    className="display-name__html emojify">Fosstodon</strong></bdi><span
                                    className="display-name__account">@fosstodon</span></span></a>
                            </div>
                        </div>
                    </div>
                    <div className='hero-widget__footer__column'>
                        <h4>Server stats:</h4>
                        <div style={{'display': 'flex'}}>
                            <div className='hero-widget__counter' style={{'width': '50%'}}>
                                <strong>4.58K</strong>
                                <span>users</span>
                            </div>
                            <div className='hero-widget__counter' style={{'width': '50%'}}>
                                <strong>1.41K</strong>
                                <span>
active
<abbr title='Monthly Active Users (MAU)'>*</abbr>
</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;