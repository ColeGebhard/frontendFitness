import React from "react";
import axios from "axios";
import { BASE_URL, COHORT_NAME } from "../const";

const Login = ({
    username,
    password,
    setUsername,
    setPassword,
    setToken
}) => {


    return (<div id='login'>
        <h2>
            Log In
        </h2>
        <form
            onSubmit={
                async (event) => {
                    event.preventDefault()
                }
            }>
            <label>
                <input class='input'
                    placeholder="Username"
                    onChange={setUsername}
                    value={username}
                />
            </label>
            <label>
                <input class='input'
                    placeholder="Password"
                    onChange={setPassword}
                    value={password}
                    type={'password'} />
            </label>
            <button class='button' type="submit">Login</button>
            <a href='/#/register' class='button' id='makeaccount' type="submit">New? Click here</a>
        </form>
    </div>)
}

export default Login;