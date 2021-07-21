import './App.css';
import Sidebar from './component/Sidebar/Sidebar';
import Chat from './component/Chat/Chat';
import react, { useEffect, useState } from 'react';
import Pusher from 'pusher-js';
import axios from './axios';

function App() {

  const [msgs, setMsgs] = useState([]);

  useEffect(() => {
    axios
      .get('/messages/sync')
      .then(res => {
        setMsgs(res.data);
      })
  }, []);

  useEffect(() => {

    const pusher = new Pusher('04c18eb85f42c862198d', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('msgs');

    channel.bind('inserted', (newMsg) => {
      setMsgs([...msgs, newMsg])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [msgs])

  console.log(msgs);

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
