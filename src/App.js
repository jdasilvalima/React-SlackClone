import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">

      <h1>Slack Clone</h1>

      <Header/>

      <div className="app_body">
        <Sidebar/>
        {/* React-Router -> chat screen */}
      </div>

    </div>
  );
}

export default App;
