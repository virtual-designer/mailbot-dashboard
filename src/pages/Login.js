import React, { useState } from 'react';
import Button from '../components/Button';

export default class Login extends React.Component {
    state = {
        forgotPassword: false
    };

    render() {
        return (
            <div className='bg-[#f2f2f2] h-[93vh]'>
                <div className="login">
                    <form method="post" className='bg-white mt-2 md:m-5 p-4 rounded shadow'>
                        <h1 className="text-3xl md:text-4xl mb-8 text-center w-[75vw] md:w-[14.5vw] mx-0 px-0">Login</h1>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" name="username" className="form-control w-[75vw] md:w-[14.5vw]" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" className="form-control w-[75vw] md:w-[14.5vw]" />
                            <a className="text-xs hover:underline" href='#' onClick={() => this.setState({ forgotPassword: !this.state.forgotPassword })}>Forgot Password?</a>
                            {this.state.forgotPassword && (<div className='bg-gray-100 p-2 rounded my-2 break-words text-sm w-[75vw] md:w-[14.5vw]'>
                                Please contact <a href="mailto:mailbot@onesoftnet.eu.org">mailbot@onesoftnet.eu.org</a> or <span className="text-gray-400">rakinar2#7578</span> on Discord including your username. The password reset link will be sent back to you.
                            </div>)}
                        </div>
                        <div className="form-group">
                            <Button>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}