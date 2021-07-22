import React, { useState } from 'react';
import './Chat.css';
import {AttachFile, SearchOutlined, MoreVert, SettingsInputAntenna} from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../../axios';

function Chat({ msgs }) {
    const [input, setInput] = useState('');

    const sendMsg = (e) => {
        e.preventDefault()
    };

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />
                
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                        <IconButton>
                            <SearchOutlined />
                        </IconButton>
                        <IconButton>
                            <AttachFile />
                        </IconButton>
                        <IconButton>
                            <MoreVert />
                        </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {msgs.map(msg => (
                    <p className={`chat__message ${msg.received && 'chat__receiver'}`}>
                    <span className='chat__name'>{msg.name}</span>    
                    {msg.message}
                
                    <span className='chat__timestamp'>
                    {msg.timestamp}
                    </span>
                </p>
                ))}
                
                {/* <p className='chat__message chat__receiver'>
                <span className='chat__name'>Daniel</span>    
                    This is a message
                
                    <span className='chat__timestamp'>
                    {new Date().toLocaleTimeString()}
                    </span>
                </p> */}
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        type="text"
                        placeholder='Type a message'
                    />
                    <button
                        onClick={sendMsg}
                        type='submit'>
                            Send a message
                        </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
