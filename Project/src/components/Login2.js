import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Login2.css'; // Import CSS file for styling
import axios from 'axios';

function Login() {
    // let url = "http://10.70.204.13:1235/users";

    const [uid, setUserId] = useState();
    const [pwd, setPassword] = useState();
    const [result, setResult] = useState('');

    let navigate = useNavigate();
    let location = useLocation();

    function loginButton_click() {
        // axios.get(url).then(res => {
        //     console.log(res);
        // }).catch((err) => {

        // })
        const queryString = location.search;
        let strReturnUrl = new URLSearchParams(queryString).get('returnUrl');

        if (strReturnUrl == null) {
            strReturnUrl = '/';
        }

        if (uid === 'admin' && pwd === 'admin123') {
            let token = 'ASJDFJF87ADF8745LK4598SAD7FAJSDF45JSDLFKAS';

            sessionStorage.setItem('user-token', token);
            sessionStorage.setItem('user-role', 'admin');
            navigate(strReturnUrl);
            window.location.reload();
        }

        else if (uid === 'user' && pwd === 'user123') {
            let token = 'BDJKDKJDKDM45LK4598SAD7FAJSDF45JSDLFKAS';
            sessionStorage.setItem('user-token', token);
            sessionStorage.setItem('user-role', 'user');
            navigate(strReturnUrl);
            window.location.reload();
        }


        else {
            setResult('Invalid User Id or Password');
        }
    }

    return (
        <div className="login-container">
            <fieldset className="login-fieldset">
                <legend>User Login</legend>
                <div className="login-input-group">
                    <label>User Id:</label>
                    <input type="text" value={uid} onChange={(event) => setUserId(event.target.value)} />
                </div>
                <div className="login-input-group">
                    <label>Password:</label>
                    <input type="password" value={pwd} onChange={(args) => setPassword(args.target.value)} />
                </div>
                <input type="button" onClick={loginButton_click} value="Login" className="login-button" />
                <p className="login-error">{result}</p>
            </fieldset>
        </div>
    );
}

export default Login;
