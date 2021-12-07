import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Slider from './Slider';
import Pusher from 'pusher-js';
import axios from './axios.js';

function App() {

  const [messages , setMessages] = useState([]);

  useEffect(()=> {
      axios.get('/messages/sync')
      .then(response =>{
        setMessages(response.data);
      })
  },[])

  useEffect(() =>{
    var pusher = new Pusher('b71a0f746cabcb492a62', {
      cluster: 'ap2'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));
      setMessages([...messages , data]);
    });

    
    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
   

  },[messages])

  console.log(messages);
  return (
    <div className="app">
      <div className="app__body">
        <Slider/>
        <Chat messages={messages}/>
      </div>
      
    </div>
  );
}

export default App;
