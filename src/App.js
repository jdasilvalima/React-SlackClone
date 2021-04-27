import React from 'react'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login';
import { useStateValue } from './components/ReactHooks/StateProvider';

function App() {

  const [ { user }, dispatch ] = useStateValue();

  return (
    <div className="app">
      <Router>
        { !user ? (
          <Login/>
        ) : (
          <>
            <Header/>
            <div className="app_body">
              <Sidebar/>
    
              <Switch>
                <Route path="/room/:roomId">
                  <Chat/>
                </Route>
                <Route path="/">
    
                </Route>
              </Switch>
            </div>
          </>
        )}

      </Router>
    </div>
  );
}

export default App;
