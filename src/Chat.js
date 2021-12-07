import { Avatar, IconButton } from '@material-ui/core';
import react, { useState } from 'react'
import './Chat.css';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SendIcon from '@material-ui/icons/Send';
import axios from './axios.js'

function Chat({ messages }) {

    const [input , setInput] = useState("");
    
    const sendMessage = (e) => {
        e.preventDefault();
        axios.post('/messages/new', {
            message: input,
            name: "Elon musk",
            timeStamp:"12/11/1999",
            received: false
        })
    };
    return(
        <div className="chat">
            <div className="chat__header">
                <Avatar/>
                <div className="chatheader__info">
                    <h3>Room Name</h3>
                    <p>Last seen...</p>
                </div>
                    <div className="chatheader__right">
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        <IconButton>
                            <AttachFileIcon/>
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    </div>
            </div>
            <div className="chat__body">
                {messages.map((messages) => (
                    <p className={`chat__message ${messages.received && "chat__receiver"}`}>

                    <span className="chat__name">{messages.name}</span>
                    {messages.message}
                    <span className="chat__timestamp">{messages.timeStamp}</span>
                </p>


                ))}
                
                {/* <p className="chat__message chat__receiver">

                    <span className="chat__name">Gyan</span>
                    This is a message.
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>


                <p className="chat__message">

                    <span className="chat__name">Gyan</span>
                    This is a message.
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">

                    <span className="chat__name">Gyan</span>
                    This is a message.
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">

                    <span className="chat__name">Gyan</span>
                    This is a message.
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message">

                    <span className="chat__name">Gyan</span>
                    This is a message.
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
                <p className="chat__message chat__receiver">

                    <span className="chat__name">Gyan</span>
                    This is a message.
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p> */}
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon/>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text"></input>
                    <button onClick={sendMessage} type="submit"><SendIcon/></button>
                </form>
                <KeyboardVoiceIcon/>
            </div>
        </div>
    )
}

export default Chat;