import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

export default function App() {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" replace={true} />} />
            </Routes>
        </div>
    );
}
