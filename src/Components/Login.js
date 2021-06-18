import React from 'react'
import '../Styles/Login.css';
import gmailImage from '../assets/newGmail.png';
import { Button } from '@material-ui/core';
import {auth, provider} from '../Firebase/Firebase';
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
            console.log(user)
        })
        .catch(error => alert(error.message))
    }

    return ( 
        <div className="login">
            <div className="login__container">
                <img src={gmailImage} alt="gmail" />
                <Button 
                    onClick={signIn}
                    variant="contained"
                    color="primary"
                >
                    Login
                </Button>
            </div>
        </div>
     );
}
 
export default Login;