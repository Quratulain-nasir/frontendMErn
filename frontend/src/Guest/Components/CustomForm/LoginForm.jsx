import React, { useContext, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GlobalContext } from '../../../Context/context';;
import Swal from 'sweetalert2';

export default function LoginForm() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { state, dispatch } = useContext(GlobalContext)

    const loginUser = (e) => {
        e.preventDefault();
        const payload = { email, password }
        if (  !email || !password ) {
            Swal.fire({
                icon: 'warning',
            title: 'Please fill in all required fields' 
        });
            return;
        }
        axios.post('http://localhost:1234/api/login', payload)
        .then((response) => {
            const { data } = response;
            if (data.token) {
                Cookies.set('token', data.token);
                dispatch({
                    type: 'USER_LOGIN',
                    token: data.token,
                });
                Swal.fire({
                    title: 'LogIn Successful!',
                    text: 'You have successfully logged in.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
            } else {
                Swal.fire({
                    title: 'Login Error',
                    text: data.message || 'An error occurred during login.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        })
        .catch((err) => {
            console.log(err);
            Swal.fire({
                title: 'Login Error',
                text: 'An error occurred during login.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
        });
}
    return (
        <div className="flip-card__front">
            <div className="title">Log in</div>
            <form className="flip-card__form" onSubmit={loginUser}>
                <input
                    className="flip-card__input"
                    name="email"
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="flip-card__input"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="flip-card__btn">Submit</button>
            </form>
        </div>
    );
}
