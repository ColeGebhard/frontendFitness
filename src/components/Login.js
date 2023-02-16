import React, {useState} from "react";
import { login } from "./api/requests";

const Login = ({
    setUser,
    setToken,
    user,
    username,
    password,
    setUsername,
    setPassword
}) => {


    return (<div id='login'>

        <form
            onSubmit={
                async (event) => {
                    event.preventDefault()

                   try{
                        console.log(username, password)
                        const response = await login(username, password)
                        console.log(response.token)
                        setToken(response.token)

                        if (response.token){
                            
                            setUser(localStorage.getItem('user'))
                            window.alert('Loggin in succesfully')
                            window.location.href = ('/#/')
                        } else {
                            setUser(false)
                        }
                   } catch (error) {
                        console.error(error)
                   }

                }
            }>
            <h2>
                Log In
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
            <button className='button' type="submit">Login</button>
            <a href='/#/register' className='button' id='makeaccount' type="submit">New? Click here</a>
        </form>
    </div>)
}

export default Login;