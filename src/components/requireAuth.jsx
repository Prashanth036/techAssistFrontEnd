import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Login } from '../pages/Login';

const RequireAuth = (
    // { children }

) => {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');

        if (!accessToken) {
            // Redirect to login page if access token is not found
            navigate('/');
        }
        // Optionally, add token validation logic here

    }, [navigate]);

    return <><Outlet /></>;
};

export default RequireAuth;
