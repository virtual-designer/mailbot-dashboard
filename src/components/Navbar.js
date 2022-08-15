import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import ButtonLink from './ButtonLink';
import Button from './Button';
import { BiArrowBack, BiMenu } from 'react-icons/bi';
import { AuthContext } from "../contexts/AuthContext";
import useLogout from "../hooks/useLogout";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(state => !state);
    const { user } = useContext(AuthContext);
    const { error, logout } = useLogout();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await console.log('Done');
        await logout();
        navigate("/login", { replace: true });
    };

    return (
        <>
            <nav className={"p-3 flex items-center navbar" + (!isOpen ? " closed" : "")}>
                <div className="navbarToggler mobile" onClick={toggle}>
                    <BiMenu size="25px" color="#fff" />
                </div>
                <Link to="/" className="text-2xl pr-4 text-white">MailBot</Link>
                <div className="mobile"></div>
                <ul className="z-10">
                    <li className="toggler mobile" onClick={toggle}><BiArrowBack className="icon mobile" size="25px" /></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {user && <li className="mobile"><Link to="/dashboard">Dashboard</Link></li>}
                    {!user && <li className="mobile"><Link to="/login">Login</Link></li>}
                </ul>
                <div className="overlay mobile fixed top-0 left-0 h-[100vh] w-[100vw] z-[3]" onClick={toggle}></div>
                <div className="absolute top-2 right-3 desktop">
                    {!user && <ButtonLink to="/login" className="m-1 block">Login</ButtonLink>}
                    {user && (
                        <>
                            <span className="text-white">{user.username}</span>
                            <Button onClick={handleLogout} className="ml-4 mt-0">Logout</Button>
                        </>
                    )}
                </div>
            </nav>
            {error && <div className="bg-red-100 text-red-400 border-red-500 p-3">{error}</div>}
        </>
    );
}