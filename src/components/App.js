import React from "react";
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Title from "./Title";
import Posts from "./Posts";
import Profile from "./Profile";
import NewPost from "./NewPost";
import MessageForm from "./Messageform";
import Search from "./Search";
import "./App.css";
import { Logout } from ".";

const App = () => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

export default App;
