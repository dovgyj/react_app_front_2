import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='grid'>
                    <div className='column-0'>
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="/terms">Terms of service</a></li>
                            <li><a href="/terms">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className='column-1'>
                        <h4>Developers</h4>
                        <ul>
                            <li><a href="https://docs.joinmastodon.org/">Documentation</a></li>
                            <li><a href="https://docs.joinmastodon.org/api/guidelines/">API</a></li>
                        </ul>
                    </div>
                    <div className='column-2'>
                        <h4><a href="https://joinmastodon.org/">What is Mastodon?</a></h4>
                        <a className="brand" href="https://fosstodon.org/">
                        </a>
                    </div>
                    <div className='column-3'>
                        <h4>fosstodon.org</h4>
                        <ul>
                            <li><a href="/about/more">About</a></li>
                            <li>v2.9.2</li>
                        </ul>
                    </div>
                    <div className='column-4'>
                        <h4>More…</h4>
                        <ul>
                            <li><a href="https://github.com/tootsuite/mastodon">Source code</a></li>
                            <li><a href="https://joinmastodon.org/apps">Mobile apps</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default Footer;