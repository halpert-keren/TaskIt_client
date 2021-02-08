import React from 'react';
import axios from 'axios';
import './Login.css'
import {GoogleLogin} from 'react-google-login'
import Header from "../shared/Header";
import {useHistory} from "react-router-dom";

const Login = (props) => {
    let history = useHistory();

    const googleSuccess = async (response) => {
        const body = {token: response.tokenId}
        axios.post('http://localhost:3000/authLogin', body, {withCredentials: true})
            .then(res => {
                history.push({
                    pathname: '/dashboard',
                    userId: res.data.googleID
                })
            })
            .catch(err => console.log(err))
    }

    const googleFailure = (response) => {
        console.log(response);
    }

    return (
        <>
            <Header/>
            <div className={'login-page'}>
                <GoogleLogin className={'login-btn'}
                             clientId='554171649210-i97q2kqu31t4hg021qdpmjn9kbobor0h.apps.googleusercontent.com'
                             onSuccess={googleSuccess}
                             onFailure={googleFailure}
                />
            </div>
        </>
    )
}

export default Login