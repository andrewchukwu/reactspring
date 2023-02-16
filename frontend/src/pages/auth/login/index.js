import React from "react";
import {Form} from 'react-router-dom'

import logo from "assets/images/app-logo.svg"

export async function action(){

    console.log("Login.action: Invoked");
}

export default function index() {
  return (
  
    <div class="app app-login p-0">    	
        <div class="row g-0 app-auth-wrapper">
            <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
                <div class="d-flex flex-column align-content-end">
                    <div class="app-auth-body mx-auto">	
                        <div class="app-auth-branding mb-4"><a class="app-logo" href="index.html"><img class="logo-icon me-2" src={logo} alt="logo"/></a></div>
                        <h2 class="auth-heading text-center mb-5">Log in to Spring CRA Portal</h2>
                        <div class="auth-form-container text-start">
                            <Form class="auth-form login-form" method="POST" action="/auth/login">

                                <div class="email mb-3">
                                    <label class="sr-only" for="signin-email">Email</label>
                                    <input id="signin-email" name="signin-email" type="email" class="form-control signin-email" placeholder="Email address" value="andrew@andrewchukwu.com" required="required"/>
                                </div>

                                <div class="password mb-3">
                                    <label class="sr-only" for="signin-password">Password</label>
                                    <input id="signin-password" name="signin-password" type="password" class="form-control signin-password" placeholder="Password" value="Passwoesadsd" required="required"/>
                                    <div class="extra mt-3 row justify-content-between">
                                        <div class="col-6">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="RememberPassword"/>
                                                <label class="form-check-label" for="RememberPassword">
                                                Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="forgot-password text-end">
                                                <a href="reset-password.html">Forgot password?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-center">
                                    <button type="submit" class="btn app-btn-primary w-100 theme-btn mx-auto">Log In</button>
                                </div>
                            </Form>
                            
                            <div class="auth-option text-center pt-5">No Account? Sign up <a class="text-link" href="signup.html" >here</a>.</div>
                        </div>

                    </div>
                
                    <footer class="app-auth-footer">
                        <div class="container text-center py-3">
                        <small class="copyright">Designed with <span class="sr-only">love</span><i class="fas fa-heart" style={ {"color":"#fb866a"} } ></i> by <a class="app-link" href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
                        </div>
                    </footer>
                </div>
            </div>
            <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div class="auth-background-holder">
                </div>
                <div class="auth-background-mask"></div>
                <div class="auth-background-overlay p-3 p-lg-5">
                    <div class="d-flex flex-column align-content-end h-100">
                        <div class="h-100"></div>
                        <div class="overlay-content p-3 p-lg-4 rounded">
                            <h5 class="mb-3 overlay-title">Explore Portal Admin Template</h5>
                            <div>Portal is a free Bootstrap 5 admin dashboard template. You can download and view the template license <a href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">here</a>.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
