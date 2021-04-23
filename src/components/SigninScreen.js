import React, { useRef } from 'react'
import '../css/SigninScreen.css';
import {auth} from '../firebase'

function SigninScreen() {
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        auth
       .createUserWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    }


    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        )
            .then((authUser) => {
                console.log(authUser);
            
            })
            .catch(error => {
                alert(error.message);
        })
        
    }

   

    return (
        <div className="signinscreen">
            <form>
            <h1>Signin</h1>
                <input ref={ emailRef} type="email" placeholder="Email" />
                <input ref={ passRef} type="password" placeholder="Password" />
                <button type="submit" onClick={login}>Sign In</button>
                <h4>
                    <span className="signinscreen__gray">New to Netflix? </span>
                    <span className="signinscreen__link" onClick={register}>Sign Up now</span>
                </h4>
            </form>
        </div>
    )
}

export default SigninScreen
