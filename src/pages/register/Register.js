import React from "react";

class Register extends React.Component {

    render() {
        return (
            <div class='container-alt'>
                <div class='logo-container'>
                    <h1>
                        <a href="/">
                        </a></h1>
                </div>
                <div class='form-container'>

                    <form className="simple_form new_user" id="new_user" novalidate="novalidate" action="/auth"
                          accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;"/><input
                        type="hidden" name="authenticity_token"
                        value="TRZrCBM8GJpO6Pl3oeP6aNEbyF/Pw0Ba5OWhds7wQcvBQpJqAAw0wEaaxryfu/ukMQ1uO1SU0aut7SN/Cvvr5w=="/>
                        <div className='flash-message alert' id='error_explanation'>
                            <strong>Something isn&#39;t quite right yet! Please review 3 errors below</strong>
                        </div>

                        <div className='fields-group'>
                            <div className="input with_label string required user_account_username field_with_hint">
                                <div className="label_input"><label className="string required"
                                                                htmlFor="user_account_attributes_username">Username <abbr
                                    title="required">*</abbr></label>
                                    <div className="label_input__wrapper"><input aria-label="Username" autocomplete="off"
                                                                             className="string required"
                                                                             autofocus="autofocus" required="required"
                                                                             aria-required="true" type="text"
                                                                             value="dsadasdsadsad"
                                                                             name="user[account_attributes][username]"
                                                                             id="user_account_attributes_username"/>
                                        <div className="label_input__append">@fosstodon.org</div>
                                    </div>
                                </div>
                                <span className="hint">Your username will be unique on fosstodon.org</span></div>
                        </div>
                        <div className='fields-group'>
                            <div className="input with_label email required user_email field_with_errors field_with_hint">
                                <div className="label_input"><label className="email required" htmlFor="user_email">E-mail
                                    address <abbr title="required">*</abbr></label>
                                    <div className="label_input__wrapper"><input aria-label="E-mail address"
                                                                             autocomplete="off"
                                                                             className="string email required"
                                                                             required="required" aria-required="true"
                                                                             aria-invalid="true" type="email" value=""
                                                                             name="user[email]" id="user_email"/></div>
                                </div>
                                <span className="hint">You will be sent a confirmation e-mail</span><span
                                className="error">can&#39;t be blank</span></div>
                        </div>
                        <div className='fields-group'>
                            <div
                                className="input with_label password required user_password field_with_errors field_with_hint">
                                <div className="label_input"><label className="password required"
                                                                htmlFor="user_password">Password <abbr
                                    title="required">*</abbr></label>
                                    <div class="label_input__wrapper"><input aria-label="Password" autocomplete="off"
                                                                             className="password required"
                                                                             required="required" aria-required="true"
                                                                             aria-invalid="true" type="password"
                                                                             name="user[password]" id="user_password"/>
                                    </div>
                                </div>
                                <span className="hint">Use at least 8 characters</span><span className="error">can&#39;t be blank</span>
                            </div>
                        </div>
                        <div className='fields-group'>
                            <div className="input with_label password required user_password_confirmation">
                                <div className="label_input"><label className="password required"
                                                                htmlFor="user_password_confirmation">Confirm password <abbr
                                    title="required">*</abbr></label>
                                    <div className="label_input__wrapper"><input aria-label="Confirm password"
                                                                             autocomplete="off"
                                                                             className="password required"
                                                                             required="required" aria-required="true"
                                                                             type="password"
                                                                             name="user[password_confirmation]"
                                                                             id="user_password_confirmation"/></div>
                                </div>
                            </div>
                        </div>
                        <div className="input hidden user_invite_code"><input className="hidden" type="hidden"
                                                                          name="user[invite_code]"
                                                                          id="user_invite_code"/></div>
                        <div className='fields-group'>
                            <div className="input with_label boolean optional user_agreement">
                                <div className="label_input"><label className="boolean optional" htmlFor="user_agreement">I agree to
                                    the <a href="/about/more" target="_blank">server rules</a> and <a href="/terms"
                                                                                                      target="_blank">terms
                                        of service</a></label>
                                    <div className="label_input__wrapper"><input value="0" type="hidden"
                                                                             name="user[agreement]"/><label
                                        className="checkbox"><input className="boolean optional" type="checkbox" value="1"
                                                                checked="checked" name="user[agreement]"
                                                                id="user_agreement"/></label></div>
                                </div>
                            </div>
                        </div>
                        <div className='actions'>
                            <button name="button" type="submit" className="btn">Sign up</button>
                        </div>
                    </form>
                    <div className='form-footer'>
                        <ul className='no-list'>
                            <li><a href="/auth/sign_in">Log in</a></li>
                            <li><a href="/auth/confirmation/new">Didn&#39;t receive confirmation instructions?</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default Register;