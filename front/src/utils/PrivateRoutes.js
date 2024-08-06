import {Outlet, Navigate} from 'react-router-dom';
import React, {useEffect, useState} from "react";

const PrivateRoutes = () => {
    const [auth, setAuth] = useState(localStorage.getItem('auth') === 'true');

    useEffect(() => {
        const handleStorageChange = () => {
            setAuth(localStorage.getItem('auth') === 'true');
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        auth ? <Outlet /> : <Navigate to='/' />
    );
}

export default PrivateRoutes;