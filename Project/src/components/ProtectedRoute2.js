import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

const ProtectedRoute2 = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        checkUserToken();
    }, []);

    function checkUserToken() {
        const userRole = sessionStorage.getItem('user-role');
        if (userRole === "admin" || userRole === "user") {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            navigate('/Login'); // Redirect to login if not logged in
        }
    }

    return (
        <>
            {isLoggedIn ? props.children : null}
        </>
    );
}

export default ProtectedRoute2;
