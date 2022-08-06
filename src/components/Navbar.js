import React from "react";
import { Link } from 'react-router-dom';
import Button from './Button';
import { BiArrowBack } from 'react-icons/bi';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="p-3 flex items-center navbar">
                <Link to="/" className="text-2xl pr-4">MailBot</Link>
                <ul>
                    <li className="mobile toggler"><BiArrowBack size="25px" /></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="absolute top-3 right-3 desktop">
                    <Button>Login</Button>
                </div>
            </nav>
        );
    }
}