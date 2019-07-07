import React, {Component} from "react";
import {Redirect} from "react-router-dom";

//import './Register.css';

class Register extends Component {

    constructor(props){
        super(props);

        this.state = {
          redirectToRegister:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);


    }
    handleSubmit(){
        this.setState({
            redirectToRegister:true
        });
    }
    render() {
        if(this.state.redirectToRegister){
            return <Redirect push to="/auth"/>
        }
        return (
            <form
                className="simple_form new_user"
                id="new_user"
                noValidate="novalidate"
                action="/auth"
                acceptCharset="UTF-8"
                method="post"
            >
                <input name="utf8" type="hidden" defaultValue="&#x2713;"/>
                <input
                    type="hidden"
                    name="authenticity_token"
                    defaultValue="yHmvh9lulu0gMoJydR/H5twC01iYf/xYGushrQtnc319DQUwnni86YccWcxqvdez7oBMMcumV9svWgTpCAHuew=="
                />
                <div className="simple_form__overlay-area">
                    <p className="lead">
                        With an account on <strong>sonet.org</strong> you'll be able to
                        follow people on any Sonet server and beyond.
                    </p>
                    <div className="fields-group">
                        <div className="input with_label string required user_account_username">
                            <div className="label_input">
                                <div className="label_input__wrapper">
                                    <input
                                        aria-label="Username"
                                        autoComplete="off"
                                        placeholder="Username"
                                        className="string required"
                                        required="required"
                                        aria-required="true"
                                        type="text"
                                        defaultValue=""
                                        name="user[account_attributes][username]"
                                        id="user_account_attributes_username"
                                    />
                                    <div className="label_input__append">@sonet.org</div>
                                </div>
                            </div>
                        </div>
                        <div className="input email required user_email">
                            <input
                                aria-label="E-mail address"
                                autoComplete="off"
                                className="string email required"
                                required="required"
                                aria-required="true"
                                placeholder="E-mail address"
                                type="email"
                                defaultValue=""
                                name="user[email]"
                                id="user_email"
                            />
                        </div>
                        <div className="input password required user_password">
                            <input
                                aria-label="Password"
                                autoComplete="off"
                                className="password required"
                                required="required"
                                aria-required="true"
                                placeholder="Password"
                                type="password"
                                name="user[password]"
                                id="user_password"
                            />
                        </div>
                        <div className="input password required user_password_confirmation">
                            <input
                                aria-label="Confirm password"
                                autoComplete="off"
                                className="password required"
                                required="required"
                                aria-required="true"
                                placeholder="Confirm password"
                                type="password"
                                name="user[password_confirmation]"
                                id="user_password_confirmation"
                            />
                        </div>
                    </div>
                    <div className="fields-group">
                        <div className="input with_label boolean optional user_agreement">
                            <div className="label_input">
                                <label className="boolean optional" htmlFor="user_agreement">
                                    I agree to the{" "}
                                    <a href="/about/more" target="_blank">
                                        server rules
                                    </a>{" "}
                                    and{" "}
                                    <a href="/terms" target="_blank">
                                        terms of service
                                    </a>
                                </label>
                                <div className="label_input__wrapper">
                                    <input
                                        defaultValue="0"
                                        type="hidden"
                                        name="user[agreement]"
                                    />
                                    <label className="checkbox">
                                        <input
                                            className="boolean optional"
                                            type="checkbox"
                                            defaultValue="1"
                                            name="user[agreement]"
                                            id="user_agreement"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="actions">
                        <button
                            name="button"
                            type="submit"
                            className="btn button button-primary"
                            onClick={this.handleSubmit}
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Register;
