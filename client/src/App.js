import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Chat from './component/Chat/Chat';
import react, { useEffect } from 'react';
import Pusher from 'pusher-js';

function App() {

  useEffect(() => {

    const pusher = new Pusher('04c18eb85f42c862198d', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('msgs');

    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, [])

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
