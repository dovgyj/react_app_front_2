import React, { Component } from "react";

class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className="landing">
          <div className="landing_grid">
            <div class="box-widget">
              <form className="simple_form">
                <p class="lead">
                  "Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s."
                </p>
                <div>
                  <label for="username" />
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    aria-describedby="user"
                    placeholder="@Username"
                    required
                  />
                </div>

                <div>
                  <label for="email" />
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="E-mail address"
                    required
                  />
                </div>

                <div>
                  <label for="pass" />
                  <input
                    type="password"
                    className="form-control"
                    id="pass"
                    name="password"
                    aria-describedby="pass"
                    placeholder="Password"
                    required
                  />
                </div>

                <div>
                  <label for="conPass" />
                  <input
                    type="password"
                    className="form-control"
                    id="conPass"
                    name="conPassword"
                    aria-describedby="conPass"
                    placeholder="Confirm Password"
                    required
                  />
                </div>

                <div class="label_input">
                <label class="checkbox">
                      <input
                        class="boolean optional"
                        type="checkbox"
                        value="1"
                        name="user[agreement]"
                        id="user_agreement"
                      />
                    </label>
                  <label class="boolean optional" for="user_agreement">
                    I agree to the  
                    <a href="/about/more" target="_blank"> server rules </a>
                    and
                    <a href="/terms" target="_blank"> terms of service </a> 
                  </label>
                    </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
