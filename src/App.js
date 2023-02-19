import React, { useState, useCallback, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TOKEN_STORAGE_KEY } from './const';
import { isUser } from './components/api/requests';


import {
  Header,
  Login,
  NotFound,
  Routines,
  UserRoutines,
  SingleRoutine,
  Activities
} from './components'
import Register from './components/Register';
import Welcome from './components/Welcome';
import MakeRoutine from './components/MakeRoutine';


const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [routines, setRoutines] = useState([]);
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');
  const [me, setMe] = useState('');


  const setTokenHere = useCallback((responseToken) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, responseToken);
    setToken(responseToken);
  }, []);

  useEffect(() => {
    const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    setToken(storageToken)
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(token);


    setToken('');
    setMe(null);
    window.location.replace('http://localhost:3000/#/');
    window.alert('Log out success');
  }, [token]);

  useEffect(() => {
    if (token) {
      isUser(token)
        .then((me) => {
          setMe(me);
        })
        .catch((e) => {
          throw new Error(`Failed to fetch myself.`);
        });
    }

  }, [token]);

  console.log(me)
  console.log(token)

  if (!token) {
    return (
      <div>
        <Switch>
          <Route exact path={'/'}>
            <Header />
            <Welcome />
          </Route>
          <Route exact path={'/login'}>
            <Login
              user={user}
              setUser={setUser}
              setToken={setTokenHere}
              username={username}
              setUsername={setUsername}
              setPassword={setPassword}
              password={password}
            />
          </Route>
          <Route exact path={'/register'}>
            <Register
              setToken={setTokenHere} />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  };
  if (token) {
    return (me ?
      <div>
        <Header
          token={token}
          logout={logout}
          currentUser={me.username} />
        <Switch>
          <Route exact path={'/'}>
            <Welcome />
          </Route>
          <Route exact path={'/routines'}>
            <Routines
              routines={routines}
              setRoutines={setRoutines}
              token={token}
              currentUser={me.username}
            />
          </Route>
          <Route exact path={'/userroutines'}>
            <UserRoutines
              routines={routines}
              setRoutines={setRoutines}
              token={token}
              currentUser={me.username}
              userId={me.id}
            />
          </Route>
          <Route path={'/userroutines/makeroutine'}>
            <MakeRoutine
              token={token}
              routines={routines}
              setRoutines={setRoutines}
            />
          </Route>
          <Route path='/routines/:routineID'>
            <SingleRoutine
              routines={routines}
              setRoutines={setRoutines}
              token={token}
            />
          </Route>
          <Route exact path={'/activities'}>
            <Activities />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </div> :
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
};


export default App;
