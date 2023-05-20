"use client"
import React, { useState } from 'react'
import '../styles/Login-Signup.css'


export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    return (
        <div id="Login-Signup-form">

            <div className="form-container">

                <div className="title-container">
                    <h1>Login</h1>
                </div>

                <div className="input-container">
                    <div className="email-wrapper">
                        <h2>Email</h2>
                        <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="password-wrapper">
                        <h2>Password</h2>
                        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                </div>

                <div className="button-container">
                    <button onClick={() => console.log('Sign Up')}>Sign Up</button>
                </div>

                {error && <div className="error-container">
                    <div>
                         <h4>{error}</h4>
                    </div>
                </div>}
            </div>
        </div>
    )
}
