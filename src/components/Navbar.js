import React from "react";
import { Link } from 'react-router-dom';
import ButtonLink from './ButtonLink';
import { BiArrowBack, BiMenu } from 'react-icons/bi';

export default class Navbar extends React.Component {
    state = {
        isOpen: false
    };

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <nav className={"p-3 flex items-center navbar" + (!this.state.isOpen ? " closed" : "")}>
                <div className="navbarToggler mobile" onClick={() => this.toggle()}>
                    <BiMenu size="25px" color="#fff" />
                </div>
                <Link to="/" className="text-2xl pr-4 text-white">MailBot</Link>
                <div className="mobile"></div>
                <ul className="z-10">
                    <li className="toggler mobile" onClick={() => this.toggle()}><BiArrowBack className="icon mobile" size="25px" /></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li className="mobile"><Link to="/login">Login</Link></li>
                </ul>
                <div className="overlay mobile fixed top-0 left-0 h-[100vh] w-[100vw] z-[3]" onClick={() => this.toggle()}></div>
                <div className="absolute top-3 right-3 p-2 desktop">
                    <ButtonLink to="/login">Login</ButtonLink>
                </div>
            </nav>
        );
    }
}