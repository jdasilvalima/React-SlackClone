import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="app">
      <Router>
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
          {/* React-Router -> chat screen */}
        </div>
      </Router>
    </div>
  );
}

export default App;
