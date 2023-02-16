import React, { useState, useCallback, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TOKEN_STORAGE_KEY, BASE_URL, COHORT_NAME } from './const';


import {
    Header,
    Login
} from './components'


const App = ()=> {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [posts, setPosts] = useState([]);
  const [me, setMe] = useState(null);

  const setTokenHere = useCallback((responseToken) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, responseToken);
    setToken(responseToken);
  }, []);

  useEffect(() => {
    const storageToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    setToken(storageToken)
  }, []);

  const setTargetValue = useCallback((callBack) => {
    return (event) => {
      callBack(event.target.value);
    };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);

    setToken('');
    setMe(null);
    window.alert('Log out success')
  }, []);

    return (
      <div>
        <Header />
        <main>
        <Route exact path={'/login'}>
              <Login username={username}
                password={password}
                setUsername={setTargetValue(setUsername)}
                setPassword={setTargetValue(setPassword)}
                setToken={setTokenHere}
              />
            </Route>
        </main>
      </div>
    );
  };


export default App;
