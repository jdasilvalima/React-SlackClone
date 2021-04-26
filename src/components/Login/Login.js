import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from "../../setting/Firebase";

function Login() {

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" alt=""/>
                <h1>Sign in to Slack Clone</h1>
                <p>slack.clone.com</p>
                <Button onClick={()=>signIn()}>Sign in with Google</Button>
            </div>
        </div>
    )
}

export default Login
