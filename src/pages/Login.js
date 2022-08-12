import { useContext, useEffect, useState } from 'react';
import Button from '../components/Button';
import { AuthContext } from '../contexts/AuthContext';
import useLogin from '../hooks/useLogin';
import useRequest from '../hooks/useRequest';
import { MdError } from 'react-icons/md';

export default function Login() {
    const [forgotPassword, setForgotPassword] = useState(false);
    // const [error, setError] = useState(null);
    const [usernameError, setUsernameError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const authData = useContext(AuthContext);
    const { error, user, login, inProgress } = useLogin();

    const handleLogin = async e => {
        e.preventDefault();

        console.log(username, password);

        setUsernameError(username ? null : 'Username is required');
        setPasswordError(password ? null : 'Password is required');

        if (!password || !username) {
            return;
        }

        await login(username, password);
    };

    return (
         <div className='bg-[#f2f2f2] h-[93vh]'>
            <div className="login">
                <form onSubmit={handleLogin} method="post" className='bg-white mt-2 md:m-5 p-4 rounded shadow'>
                    <h1 className="text-3xl md:text-4xl mb-8 text-center w-[75vw] md:w-[14.5vw] mx-0 px-0">Login</h1>
                    {error && <div className="form-group"><div className="bg-red-100 text-red-400 p-3 rounded border border-red-600"><MdError size={20} className='inline-block' /> {error}</div></div>}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input onChange={e => setUsername(e.target.value)} type="text" id="username" name="username" className="form-control w-[75vw] md:w-[14.5vw]" />
                        {usernameError && <span className="text-sm text-red-400">{usernameError}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input onChange={e => setPassword(e.target.value)} type="password" id="password" name="password" className="form-control w-[75vw] md:w-[14.5vw]" />
                        {passwordError && <span className="text-sm text-red-400 block">{passwordError}</span>}

                        <span className="text-xs hover:underline focus:text-blue-500" onClick={() => setForgotPassword(state => !state)}>Forgot Password?</span>
                        {forgotPassword && (<div className='bg-gray-100 p-2 rounded my-2 break-words text-sm w-[75vw] md:w-[14.5vw]'>
                            Please contact <a href="mailto:mailbot@onesoftnet.eu.org">mailbot@onesoftnet.eu.org</a> or <span className="text-gray-400">rakinar2#7578</span> on Discord including your username. The password reset link will be sent back to you.
                        </div>)}
                    </div>
                    <div className="form-group">
                        <Button type="submit" disabled={inProgress}>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
