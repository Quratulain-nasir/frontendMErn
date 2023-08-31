 import axios from 'axios';
    import React, { useState } from 'react';
    import Swal from 'sweetalert2';
    import {  useNavigate } from 'react-router-dom';
    
    export default function Signupform() {
        const navigate = useNavigate();
        const [email, setEmail] = useState('');
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
    
        const SignupUser = async (e) => {
            e.preventDefault();
    
            // Email validation
            if (!email.includes('@')) {
                Swal.fire({
                    title: 'Invalid Email',
                    text: 'Please enter a valid email address.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                return;
            }
    
            // Password length validation
            if (password.length < 6) {
                Swal.fire({
                    title: 'Weak Password',
                    text: 'Password must be at least 6 characters long.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
                return;
            }
    
            const payload = { email, password, username };
            if (  !email || !password || !username) {
                Swal.fire({
                    icon: 'warning',
                title: 'Please fill in all required fields' 
            });
                return;
            }
            axios.post('http://localhost:1234/api/signup', payload)
            .then((response) => {
                console.log(response.data);
                if (response.data.message === "Signup Successfully") {
                    Swal.fire({
                        title: 'Signup Successful!',
                        text: 'You have successfully signed up.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        navigate('/login');
                    });
                } else if (response.data.message === "User Already Exists") {
                    Swal.fire({
                        title: 'User Already Exists',
                        text: 'The provided email is already registered.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
                .catch((err) => {
                    console.log(err);
                    Swal.fire({
                        title: 'Signup Error',
                        text: 'User Already Exist',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                });
        };
    
    return (
        <>
        <div className="flip-card__back">
            <div className="title">Sign up</div>
            <form className="flip-card__form" onSubmit={SignupUser}>
                <input
                    className="flip-card__input"
                    placeholder="Name"
                    type="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                <button className="flip-card__btn">Confirm!</button>
            </form>
        </div>
        </>
    )
}
