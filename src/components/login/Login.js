import React,{Component} from "react";

import "./Login.css";

class Login extends Component {

    render() {
        return (
            <form className="simple_form new_user" id="new_user" noValidate="novalidate"
                  action="/auth/sign_in" acceptCharset="UTF-8" method="post"><input name="utf8"
                                                                                     type="hidden"
                                                                                     defaultValue="&#x2713;"/><input
                type="hidden" name="authenticity_token"
                defaultValue="bhYIqrjkdLnJWEsUzVfdXOoWUWE9LBzX4JzQNjIXv+p40Yc50VDzvbVnH0sBTY9wuFOuMsAqcmbNmqqm3yBjbA=="/>
                <div className='fields-group'>
                    <div className="input email optional user_email"><input
                        aria-label="E-mail address" className="string email optional"
                        placeholder="E-mail address" type="email" defaultValue="" name="user[email]"
                        id="user_email"/></div>
                    <div className="input password optional user_password"><input
                        aria-label="Password" className="password optional"
                        placeholder="Password" type="password" name="user[password]"
                        id="user_password"/></div>
                </div>
                <div className='actions'>
                    <button name="button" type="submit"
                            className="btn button button-primary">Log in
                    </button>
                </div>
                <p className='hint subtle-hint'><a href="/auth/password/new">Trouble logging
                    in?</a></p>
            </form>
        );
    }
}

export default Login;