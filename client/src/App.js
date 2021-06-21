import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Chat from './component/Chat/Chat';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
      
    </div>
  );
}

export default App;
