import React from "react";
import { register } from "./api/requests";
import { useState } from "react";

const Register = ({
    setToken
}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  

    return (<div id='login'>

        <form id="loginForm"
            onSubmit={
                async (event) => {
                    event.preventDefault()
                    try {
                        console.log(username, password)
                        const response = await register(username, password)
                        console.log(response);
                        setToken(response.token)

                        if(response.token){
                        window.location.href = ('/#/')
                        } else if (!response){
                            window.alert(`Could not log in, Username: ${username} already exists`)
                        } else if(password.length<8){
                            window.alert('Password too short')
                        }
                    } catch ({error, message}) {
                        console.error(error)
                   }

                }
            }>
            <h2>
                Sign Up
            </h2>
            <label>
                <input className='input'
                    placeholder="Username"
                    onChange={event => setUsername(event.target.value)}
                    value={username}
                />
            </label>
            <label>
                <input className='input'
                    placeholder="Password"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                    type={'password'} />
            </label>
            <button className='button' type="submit">Sign Up</button>
            <a href='/#/login' className='button' id='makeaccount' type="submit">Existing user? Click here</a>

        </form>
    </div>)
}

export default Register;